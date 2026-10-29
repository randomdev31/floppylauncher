const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
function loadStore(state = {}) {
    const module = { exports: {} };
    const clone = value => value === undefined ? undefined : JSON.parse(JSON.stringify(value));
    vm.runInNewContext(fs.readFileSync(path.join(root, 'src/assets/js/utils/personalization.js'), 'utf8'), {
        module, Buffer,
        require(id) {
            if (id === 'crypto') return require('node:crypto');
            assert.equal(id, './storage');
            return {
                getValue: async key => clone(state[key]),
                setValue: async (key, value) => { state[key] = clone(value); },
            };
        },
    });
    return module.exports;
}

test('local themes preserve existing customization and survive reload without an account', async () => {
    const state = { 'theme-color': '#123456', 'background-video': '/tmp/background.mp4' };
    const store = loadStore(state);
    const [initial] = await store.themeRequest('/my');
    assert.equal(initial.btnColor, '#123456');
    assert.equal(initial.backgroundVideo, '/tmp/background.mp4');
    const { id } = await store.themeRequest('/create', {
        name: 'Animado', background: 'data:image/gif;base64,R0lGODlh', animated: true,
        btnColor: '#112233', footerOpacity: 0.5,
    });
    const reloaded = loadStore(state);
    let theme = (await reloaded.themeRequest('/my')).find(item => item._id === id);
    assert.ok(theme.animated);
    assert.match(theme.background, /^data:image\/gif/);
    await reloaded.themeRequest('/update', { ...theme, id, name: 'Nuevo nombre' });
    theme = (await reloaded.themeRequest('/my')).find(item => item._id === id);
    assert.equal(theme.name, 'Nuevo nombre');
    await reloaded.themeRequest('/delete', { id });
    assert.ok(!(await reloaded.themeRequest('/my')).some(item => item._id === id));
});

test('animated themes can be shared and imported across installations with no server', async () => {
    const sender = loadStore();
    const { id } = await sender.themeRequest('/create', {
        name: 'Tema GIF', animated: true, background: 'data:image/gif;base64,R0lGODlh',
    });
    const { shareUrl } = await sender.themeRequest('/share', { id });
    const receiver = loadStore();
    const imported = await receiver.themeRequest(`/import/${shareUrl}`, { customName: 'Importado' });
    const theme = (await receiver.themeRequest('/my')).find(item => item._id === imported.id);
    assert.equal(theme.name, 'Importado');
    assert.equal(theme.background, 'data:image/gif;base64,R0lGODlh');
    assert.ok(theme.animated);
    await assert.rejects(receiver.themeRequest('/import/not-a-theme'), /inválido/);
});

test('profile images and colors persist for every account type without subscriptions', async () => {
    const state = {};
    const store = loadStore(state);
    const image = await store.readImageFile({
        size: 4, type: 'image/gif', arrayBuffer: async () => Buffer.from('GIF8'),
    });
    for (const type of ['offline', 'microsoft', 'battly']) {
        await store.saveProfile(type, { backgroundImage: image, nameColor: '#123456', premium: false, token: 'secret' });
        const profile = await loadStore(state).loadProfile(type);
        assert.equal(profile.backgroundImage, image);
        assert.equal(profile.nameColor, '#123456');
        assert.ok(!('token' in profile));
        assert.ok(!('premium' in profile));
    }
    await assert.rejects(store.readImageFile({ size: 9 * 1024 * 1024, type: 'image/gif' }), /8 MB/);
});

test('profile controls and preview work even with an old non-premium profile', () => {
    const source = fs.readFileSync(path.join(root, 'src/assets/js/panels/settings.js'), 'utf8');
    const classSource = source.slice(source.indexOf('class Settings {'), source.indexOf('export default Settings;'));
    const context = {
        document: { getElementById: () => null },
        module: { exports: {} },
    };
    vm.runInNewContext(classSource + '\nmodule.exports = Settings;', context);
    const settings = new context.module.exports();
    const elements = {
        bgImageInput: { disabled: true },
        bgImageLabel: { classList: { remove() {} } },
        previewCard: { style: {} },
        previewUsername: { style: {} },
    };
    const profile = { isPremium: false, backgroundImage: 'data:image/gif;base64,R0lGODlh', nameColor: '#123456' };
    settings.applyProfileToUI(elements, profile, '');
    settings.updatePreview(elements, profile, '');
    assert.equal(elements.bgImageInput.disabled, false);
    assert.match(elements.previewCard.style.backgroundImage, /data:image\/gif/);
    assert.equal(elements.previewUsername.style.color, '#123456');
});

test('launcher source no longer queries subscription status or displays purchase restrictions', () => {
    for (const file of ['utils.js', 'launcher.js', 'panels/settings.js', 'panels/login.js', 'panels/home.js']) {
        const source = fs.readFileSync(path.join(root, 'src/assets/js', file), 'utf8');
        assert.doesNotMatch(source, /isPremium|\.premium\b|obtenerUsuariosPremium|WelcomePremiumShown|battlylauncher\.com\/premium|Battly\+/i);
    }
    assert.doesNotMatch(fs.readFileSync(path.join(root, 'src/panels/home.html'), 'utf8'), /<iframe[^>]*\bads\//);
});
