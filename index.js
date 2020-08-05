const {app, BrowserWindow, globalShortcut} = require('electron');
const url = require('url');
const path = require('path');

function boot()
{
  win = new BrowserWindow({
    width:250,
    height:60,
    frame: false,
    resizable: false
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
}

app.on('ready', boot);

app.whenReady().then(() => {
  const z = globalShortcut.register('Z', () => {
      win.webContents.executeJavaScript("startContinue();");
  });

  const x = globalShortcut.register('X', () => {
      win.webContents.executeJavaScript("pause();");
  });

  const c = globalShortcut.register('C', () => {
      win.webContents.executeJavaScript("reset();");
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
