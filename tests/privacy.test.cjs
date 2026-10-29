const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');

test('startup opens the launcher without updater, presence or telemetry services', async () => {
  const channels = [];
  const ready = [];
  let opened = 0;
  const electron = {
    app: {
      setAppUserModelId() {},
      requestSingleInstanceLock: () => true,
      whenReady: () => ({ then: callback => ready.push(callback) }),
      on() {},
    },
    ipcMain: {
      on: channel => channels.push(channel),
      handle: channel => channels.push(channel),
    },
    Menu: { buildFromTemplate: items => items },
    Tray: class { setToolTip() {} setContextMenu() {} },
  };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'src/app.js'), 'utf8'), {
    __dirname: path.join(root, 'src'),
    process: { env: { HOME: '/tmp' }, platform: 'linux', on() {} },
    console,
    require: id => {
      if (id === 'electron') return electron;
      if (id === 'fs') return { existsSync: () => true };
      if (id === 'path') return path;
      if (id === './assets/js/utils/library-loader') return {};
      if (id === './assets/js/windows/mainWindow.js') return { createWindow: () => opened++ };
      throw new Error(`Unexpected startup dependency: ${id}`);
    },
  });
  for (const callback of ready) await callback();
  assert.equal(opened, 1);
  assert.ok(channels.includes('Microsoft-window'));
  assert.ok(channels.includes('main-window-hide'));
  assert.ok(channels.every(channel => !/analytics|socket|update-app|start-update|submit-error|capture-window|updateStatus/i.test(channel)));
});

test('translations load locally, including fallback, without remote requests', async () => {
  const requests = [];
  const context = {
    window: {}, module: { exports: {} },
    console: { log() {}, warn() {}, error() {} },
    fetch: async url => {
      requests.push(url);
      assert.ok(url.startsWith('./assets/langs/'));
      const data = JSON.parse(fs.readFileSync(path.join(root, 'src', url), 'utf8'));
      return { json: async () => data };
    },
  };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'src/assets/js/utils/stringLoader.js'), 'utf8'), context);
  const loader = context.window.stringLoader;
  await loader.loadStrings('es');
  assert.equal(loader.getString('common.play'), 'Jugar');
  const count = requests.length;
  await loader.loadStrings('es');
  assert.equal(requests.length, count);
  await loader.loadStrings('missing-language');
  assert.equal(loader.getCurrentLanguage(), 'en');
  assert.equal(loader.getString('common.play'), 'Play');
});

test('remaining panels exist and removed services are absent from the dependency lock', () => {
  const source = fs.readFileSync(path.join(root, 'src/assets/js/launcher.js'), 'utf8');
  const panels = source.match(/const panelNames = \[([\s\S]*?)\]/)[1];
  for (const [, name] of panels.matchAll(/"([^"]+)"/g)) {
    assert.ok(!['music', 'friends', 'servers', 'chat'].includes(name));
    for (const file of [`src/panels/${name}.html`, `src/assets/js/panels/${name}.js`]) {
      assert.ok(fs.existsSync(path.join(root, file)), file);
    }
  }
  const lock = JSON.parse(fs.readFileSync(path.join(root, 'package-lock.json'), 'utf8'));
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  assert.deepEqual(lock.packages[''].dependencies, pkg.dependencies);
  for (const name of ['@aptabase/electron', 'electron-updater', 'socket.io-client', '@distube/ytdl-core', '@distube/ytpl', 'denethdev-ytmp3', 'ytpl']) {
    assert.ok(!lock.packages[`node_modules/${name}`], name);
  }
});

test('source contains no telemetry, presence or launcher update channels', () => {
  const forbidden = /analyticsHelper|AnalyticsController|@aptabase|electron-updater|socket\.io-client|submit-error-report|capture-window-screenshot|sendLogs-v3|new-status-discord|ipcRenderer\.send\(["']updateStatus/;
  const files = [path.join(root, 'src/app.js')];
  function collect(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (entry.name === 'libs') continue;
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) collect(file);
      else if (entry.name.endsWith('.js')) files.push(file);
    }
  }
  collect(path.join(root, 'src/assets/js'));
  for (const file of files) assert.doesNotMatch(fs.readFileSync(file, 'utf8'), forbidden, file);
});
