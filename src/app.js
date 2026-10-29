"use strict";

// Configuración SSL para desarrollo - ignorar certificados autofirmados
if (process.env.NODE_ENV === "dev") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const {
  app,
  ipcMain,
  shell,
} = require("electron");
const { loadMinecraftJavaCore } = require('./assets/js/utils/library-loader');
const fs = require("fs");
const path = require("path");
const { Notification, Menu, Tray } = require("electron");

let dev = process.env.NODE_ENV === "dev";
app.setAppUserModelId("Floppy Launcher");

const dataDirectory =
  process.env.APPDATA ||
  (process.platform == "darwin"
    ? `${process.env.HOME}/Library/Application Support`
    : process.env.HOME);

if (!fs.existsSync(path.join(dataDirectory, ".battly")))
  fs.mkdirSync(path.join(dataDirectory, ".battly"));

let tray = null;
app.whenReady().then(async () => {
  tray = new Tray(path.join(__dirname, "/assets/images/icon.png"));

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Floppy Launcher",
      type: "normal",
      icon: path.join(__dirname, "/assets/images/icon15px.png"),
      click: () => {
        const MainWindow = require("./assets/js/windows/mainWindow.js");
        MainWindow.getWindow().show();
      },
    },
    { type: "separator" },
    {
      label: "Abrir carpeta de Floppy",
      type: "normal",
      click: () => shell.openPath(path.join(dataDirectory, ".battly")),
    },
    { type: "separator" },
    {
      label: "Discord",
      click: () =>
        shell.openExternal("https://discord.gg/tecno-bros-885235460178342009"),
    },
    {
      label: "Sitio web",
      click: () => shell.openExternal("https://battlylauncher.com"),
    },
    { type: "separator" },
    { label: "Cerrar Floppy", click: () => app.quit() },
  ]);
  tray.setToolTip("Floppy Launcher");
  tray.setContextMenu(contextMenu);

});

const MainWindow = require("./assets/js/windows/mainWindow.js");

if (dev) {
  let appPath = path.resolve("./AppData/Launcher").replace(/\\/g, "/");
  if (!fs.existsSync(appPath)) fs.mkdirSync(appPath, { recursive: true });
  app.setPath("userData", appPath);
}

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", (_event, commandLine) => {
    const window = MainWindow.getWindow();
    if (window) {
      if (window.isMinimized()) window.restore();
      window.focus();
      const customArg = commandLine.find((arg) =>
        arg.startsWith("battlylauncher://")
      );
      if (customArg) window.webContents.send("battly-login", customArg);
    }
  });

  app.whenReady().then(() => MainWindow.createWindow());
}

process.on("uncaughtException", (error) => console.log(error));
process.on("unhandledRejection", (error) => console.log(error));

ipcMain.on("main-window-open", () => MainWindow.createWindow());
ipcMain.on("main-window-dev-tools", () =>
  MainWindow.getWindow().webContents.openDevTools()
);
ipcMain.on("main-window-close", () => MainWindow.destroyWindow());
ipcMain.on("main-window-progress_", (_e, size_actual) => {
  MainWindow.getWindow().setProgressBar(
    parseInt(size_actual.progress) / parseInt(100)
  );
});
ipcMain.on("main-window-progress", (_e, size_actual) => {
  MainWindow.getWindow().setProgressBar(
    parseInt(size_actual.progress_actual) / parseInt(size_actual.size_actual)
  );
});
ipcMain.on("main-window-progress-loading", () =>
  MainWindow.getWindow().setProgressBar(2)
);
ipcMain.on("main-window-progress-reset", () =>
  MainWindow.getWindow().setProgressBar(-1)
);
ipcMain.on("main-window-minimize", () => MainWindow.getWindow().minimize());
ipcMain.on("main-window-maximize", () => {
  if (MainWindow.getWindow().isMaximized()) {
    MainWindow.getWindow().unmaximize();
  } else {
    MainWindow.getWindow().maximize();
  }
});
ipcMain.on("main-window-hide", () => MainWindow.getWindow().hide());
ipcMain.on("main-window-show", () => MainWindow.getWindow().show());

ipcMain.on("show-notification", (_event, { title, message }) => {
  const notification = new Notification({
    title: title,
    body: message,
    icon: path.join(__dirname, "assets/images/icon.png")
  });
  notification.show();

});

ipcMain.handle("Microsoft-window", async (_event, client_id) => {
  try {
    // Leer la configuración directamente desde el archivo local
    const configPath = path.join(
      dataDirectory,
      ".battly",
      "battly",
      "launcher",
      "config-launcher",
      "config.json"
    );

    const battlyConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));

    // Cargar minecraft-java-core dinámicamente
    const minecraftLib = await loadMinecraftJavaCore(battlyConfig);
    const { Microsoft } = minecraftLib;

    return await new Microsoft(client_id).getAuth();
  } catch (error) {
    console.error('Error al autenticar con Microsoft:', error);
    throw error;
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("restartLauncher", () => {
  app.relaunch();
  app.exit();
});
