var import_electron = require("electron");
var import_node_os = require("node:os");
var import_node_path = require("node:path");
process.env.DIST_ELECTRON = (0, import_node_path.join)(__dirname, "../");
process.env.DIST = (0, import_node_path.join)(process.env.DIST_ELECTRON, "../dist");
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL ? (0, import_node_path.join)(process.env.DIST_ELECTRON, "../public") : process.env.DIST;
if ((0, import_node_os.release)().startsWith("6.1"))
  import_electron.app.disableHardwareAcceleration();
if (process.platform === "win32")
  import_electron.app.setAppUserModelId(import_electron.app.getName());
if (!import_electron.app.requestSingleInstanceLock()) {
  import_electron.app.quit();
  process.exit(0);
}
let win = null;
const preload = (0, import_node_path.join)(__dirname, "../preload/index.js");
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = (0, import_node_path.join)(process.env.DIST, "index.html");
async function createWindow() {
  win = new import_electron.BrowserWindow({
    minWidth: 1e3,
    minHeight: 600,
    title: "Main window",
    icon: (0, import_node_path.join)(process.env.PUBLIC, "favicon.ico"),
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(url);
    win.webContents.openDevTools();
  } else {
    win.loadFile(indexHtml);
  }
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  win.webContents.setWindowOpenHandler(({ url: url2 }) => {
    if (url2.startsWith("https:"))
      import_electron.shell.openExternal(url2);
    return { action: "deny" };
  });
}
import_electron.app.whenReady().then(createWindow);
import_electron.app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin")
    import_electron.app.quit();
});
import_electron.app.on("second-instance", () => {
  if (win) {
    if (win.isMinimized())
      win.restore();
    win.focus();
  }
});
import_electron.app.on("activate", () => {
  const allWindows = import_electron.BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});
import_electron.ipcMain.handle("open-win", (_, arg) => {
  const childWindow = new import_electron.BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}#${arg}`);
  } else {
    childWindow.loadFile(indexHtml, { hash: arg });
  }
});

//# sourceMappingURL=index.js.map