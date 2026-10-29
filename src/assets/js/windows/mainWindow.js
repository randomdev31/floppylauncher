/**
 * @author TECNO BROS
 */

"use strict";
const electron = require("electron");
const path = require("path");
const os = require("os");
const pkg = require("../../../../package.json");
let mainWindow = undefined;
let selectLangWindow = undefined;
let syncInProgress = false; // Flag para controlar si hay sincronización en progreso
const { app, net, protocol } = require("electron");
const { ipcMain } = require("electron");
let dev = process.env.NODE_ENV === "dev";
const { getValue, setValue } = require('../utils/storage');
const fs = require("fs");
const dataDirectory =
  process.env.APPDATA ||
  (process.platform == "darwin"
    ? `${process.env.HOME}/Library/Application Support`
    : process.env.HOME);


function getWindow() {
  return mainWindow;
}

function destroyWindow() {
  if (!mainWindow) return;
  mainWindow.close();
  mainWindow = undefined;
}

async function createWindow() {
  destroyWindow();
  mainWindow = new electron.BrowserWindow({
    title: pkg.productname,
    width: 1280,
    height: 720,
    minWidth: 980,
    minHeight: 552,
    resizable: true,
    transparent: false,
    icon: `./src/assets/images/icon.${os.platform() === "win32" ? "ico" : "png"
      }`,
    frame: os.platform() === "win32" ? false : true,
    show: fs.existsSync(`${dataDirectory}\\.battly\\launchboost`) ? false : true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      devTools: true,
      experimentalFeatures: false,
    },
  });

  if (mainWindow) {
    if (dev) {
      mainWindow.openDevTools();
    }
  }

  mainWindow.loadFile(
    path.join(electron.app.getAppPath(), "src", "launcher.html")
  );


  selectLangWindow = new electron.BrowserWindow({
    title: pkg.productname,
    width: 853,
    height: 480,
    minWidth: 853,
    minHeight: 480,
    resizable: true,
    icon: `./src/assets/images/icon.${os.platform() === "win32" ? "ico" : "png"
      }`,
    transparent: true,
    frame: false,
    show: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      devTools: true,
    },
  });

  electron.Menu.setApplicationMenu(null);
  mainWindow.setMenuBarVisibility(false);

  let lang;
  mainWindow.once("ready-to-show", async () => {
    try {
      lang = await getValue('lang');
      console.log("Current language:", lang);

      // Si no hay idioma configurado (primera vez), establecer español y mostrar el selector
      if (!lang || lang === null || lang === undefined) {
        // Establecer español como idioma predeterminado
        await setValue('lang', 'es');

        selectLangWindow.loadFile(
          path.join(
            electron.app.getAppPath(),
            "src",
            "panels",
            "select-lang.html"
          )
        );
        selectLangWindow.once("ready-to-show", () => {
          if (selectLangWindow) {
            selectLangWindow.show();
            if (dev) {
              selectLangWindow.openDevTools();
            }
          }
        });
      } else {
        mainWindow.show();
      }
    } catch (error) {
      console.error("Error al ejecutar JavaScript:", error);
      mainWindow.show();
    }
  });

  mainWindow.on("close", (event) => {
    if (syncInProgress) {
      console.log('🔄 Sincronización en progreso. Ocultando ventana en lugar de cerrar...');
      event.preventDefault(); // Prevenir el cierre
      mainWindow.hide(); // Solo ocultar la ventana
    } else {
      process.exit(0);
    }
  });

  ipcMain.on("change-lang", (event, lang) => {
    selectLangWindow.close();
    app.relaunch();
    app.exit();
  });

  ipcMain.on("reload-app", () => {
    if (mainWindow) {
      mainWindow.reload();
    }
  });

  // Control de sincronización en progreso
  ipcMain.on("sync-started", () => {
    console.log('🔄 Sincronización iniciada - bloqueando cierre de aplicación');
    syncInProgress = true;
  });

  ipcMain.on("sync-finished", () => {
    console.log('✅ Sincronización completada - permitiendo cierre de aplicación');
    syncInProgress = false;
  });
}

module.exports = {
  getWindow,
  createWindow,
  destroyWindow,
};
