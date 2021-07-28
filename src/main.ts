import {app, BrowserWindow} from "electron"

app.whenReady().then(() => {
  const window = new BrowserWindow({
    maxWidth: 1200,
    maxHeight: 1080,
  });

  window.loadFile('build/assets/index.html')
  window.webContents.openDevTools()
})