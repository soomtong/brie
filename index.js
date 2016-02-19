'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');
const Menu = require('menu');
const defaultMenu = require('electron-default-menu');

// report crashes to the Electron project
require('crash-reporter').start({
  productName: 'Brie',
  companyName: 'Global Open Frontier',
  submitURL: 'https://brie.io/report',
  autoSubmit: true
});

// prevent window being GC'd
let mainWindow = null;

function onClosed() {
  mainWindow = null;
}

function cleanUpCache(item, focusedWindow) {
  console.log('Cleaned up', item, focusedWindow);
}

function createMainWindow() {
  var opts = {
    width: 800,
    height: 540,
    minWidth: 640,
    minHeight: 420,
    resizable: true,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden'
  };

  const is2nd = process.argv.indexOf('--2nd') >= 0;

  if (is2nd) {
    setOptsForDualScreen(opts);
  }

  const menu = defaultMenu();

  var toolMenu = {
    label: 'Tools',
    submenu: [
      {
        label: 'Clean Cache',
        click: cleanUpCache
      }
    ]
  };

  Menu.setApplicationMenu(Menu.buildFromTemplate([...menu.slice(0, 2), toolMenu, ...menu.slice(2)]));

  const win = new BrowserWindow(opts);

  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', onClosed);

  return win;
}

function setOptsForDualScreen(opts) {
  var atomScreen = require('screen');

  var displays = atomScreen.getAllDisplays();
  var d2 = displays.length > 1 ? displays[1] : null;

  if (d2) {
    opts.x = d2.bounds.x + (d2.size.width - opts.width) / 2;
    opts.y = d2.bounds.y + (d2.size.height - opts.height) / 2;
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate-with-no-open-windows', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});