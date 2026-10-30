const { getValue, setValue } = require('./storage');
const { randomUUID } = require('crypto');

const THEME_KEY = 'localThemes';
const PROFILE_KEY = 'localProfiles';
const SHARE_PREFIX = 'floppylauncher-theme:';

function themeData(input = {}) {
    const color = (value, fallback) => /^#[a-f\d]{6}$/i.test(value) ? value : fallback;
    const background = typeof input.background === 'string' && /^(data:image\/|https?:\/\/|file:\/\/)/i.test(input.background)
        ? input.background : null;
    return {
        name: String(input.name || 'Sin nombre').replace(/[<>"'&]/g, '').slice(0, 100),
        btnColor: color(input.btnColor, '#3e8ed0'),
        footerColor: color(input.footerColor, '#0a0a0a'),
        loadingColor: color(input.loadingColor, '#000000'),
        footerOpacity: Math.min(1, Math.max(0, Number(input.footerOpacity) || 0)),
        startupSound: typeof input.startupSound === 'string' && /^[\w-]+$/.test(input.startupSound)
            ? input.startupSound : 'start',
        background,
        backgroundVideo: typeof input.backgroundVideo === 'string' ? input.backgroundVideo : null,
        animated: Boolean(input.animated),
    };
}

async function themes() {
    const saved = await getValue(THEME_KEY);
    if (Array.isArray(saved) && saved.length) {
        const normalized = saved.map(theme => ({ ...theme, ...themeData(theme) }));
        if (JSON.stringify(normalized) !== JSON.stringify(saved)) {
            await setValue(THEME_KEY, normalized);
        }
        return normalized;
    }
    // Preserve the active customization when upgrading from cloud themes.
    const initial = {
        _id: randomUUID(), owner: 'local',
        ...themeData({
            name: 'Predeterminado',
            btnColor: await getValue('theme-color'),
            footerColor: await getValue('theme-color-bottom-bar'),
            footerOpacity: (await getValue('theme-opacity-bottom-bar')) ?? 0.85,
            loadingColor: await getValue('background-loading-screen-color'),
            startupSound: await getValue('sonido-inicio'),
            background: await getValue('background-img'),
            backgroundVideo: await getValue('background-video'),
        }),
    };
    await setValue(THEME_KEY, [initial]);
    return [initial];
}

async function themeRequest(route, body = {}) {
    const collection = await themes();
    if (route === '/my') return collection;
    if (route === '/share/stats') return { sharedThemes: (await getValue('localThemeExports')) || [] };
    if (route === '/create' || route.startsWith('/import/')) {
        let input = body;
        if (route.startsWith('/import/')) {
            const code = route.slice('/import/'.length).trim();
            if (!code.startsWith(SHARE_PREFIX) || code.length > 16 * 1024 * 1024) throw new Error('Código de tema inválido');
            input = JSON.parse(Buffer.from(code.slice(SHARE_PREFIX.length), 'base64url').toString('utf8'));
            if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Tema inválido');
            if (body.customName) input.name = body.customName;
        }
        const theme = { ...themeData(input), _id: randomUUID(), owner: 'local' };
        await setValue(THEME_KEY, [...collection, theme]);
        return { id: theme._id };
    }
    const index = collection.findIndex(theme => theme._id === body.id);
    if (index < 0) throw new Error('Tema no encontrado');
    if (route === '/update') {
        collection[index] = { ...collection[index], ...themeData(body) };
        await setValue(THEME_KEY, collection);
        return { id: body.id };
    }
    if (route === '/delete') {
        await setValue(THEME_KEY, collection.filter(theme => theme._id !== body.id));
        return { success: true };
    }
    if (route === '/share') {
        const theme = collection[index];
        const shareUrl = SHARE_PREFIX + Buffer.from(JSON.stringify(themeData(theme))).toString('base64url');
        const exports = (await getValue('localThemeExports')) || [];
        const previous = exports.find(item => item.themeId === body.id);
        const entry = {
            themeId: body.id, themeName: theme.name, shareUrl,
            createdAt: new Date().toISOString(), exportCount: (previous?.exportCount || 0) + 1,
        };
        await setValue('localThemeExports', [...exports.filter(item => item.themeId !== body.id), entry]);
        return { shareUrl };
    }
    throw new Error('Operación de tema desconocida');
}

async function readImageFile(file) {
    if (!file || file.size > 8 * 1024 * 1024 || !/^image\/(png|jpeg|gif|webp)$/i.test(file.type)) {
        throw new Error('Selecciona una imagen PNG, JPG, GIF o WebP de hasta 8 MB');
    }
    return `data:${file.type};base64,${Buffer.from(await file.arrayBuffer()).toString('base64')}`;
}

async function loadProfile(uuid) {
    return (await getValue(PROFILE_KEY))?.[uuid] || {};
}

async function saveProfile(uuid, profile) {
    if (!uuid) throw new Error('Cuenta no encontrada');
    const profiles = (await getValue(PROFILE_KEY)) || {};
    const { borderColor, borderStyle, borderWidth, nameColor, backgroundColor, backgroundImage } = profile;
    profiles[uuid] = { borderColor, borderStyle, borderWidth, nameColor, backgroundColor, backgroundImage };
    await setValue(PROFILE_KEY, profiles);
}

module.exports = { themeRequest, readImageFile, loadProfile, saveProfile };
