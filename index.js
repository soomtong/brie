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
  // dereference the window
  // for multiple windows store them in an array
  mainWindow = null;
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

  const win = new BrowserWindow(opts);
/*
  if (process.env.DEV) {
    win.loadUrl('http://localhost:8000/dev.html');
    win.openDevTools();
  } else {
    win.loadUrl(`file://${__dirname}/index.html`);
  }
*/
  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', onClosed);

  var menu = defaultMenu();
  menu.splice(2, 0, {
    label: 'Tools',
    submenu: [
      {
        label: 'Clean Cache',
        click: function (item, focusedWindow) {
          console.log('Cleaned up');
        }
      }
    ]
  });

  // Set top-level application menu, using modified template
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));

  return win;
}

/*
app.on('ready', function () {
  const width = 800;
  const height = 540;
  const is2nd = process.argv.indexOf('--2nd') >= 0;

  var opts = {
    width: width,
    height: height,
    minWidth: 640,
    minHeight: 420,
    resizable: true
  };

  if (is2nd) {
    setOptsForDualScreen(opts);
  }

  mainWindow = new BrowserWindow(opts);

  // WARN: Inspect window should be opened before loading URL
  //mainWindow.inspectElement(0, 0);

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('closed', function () {
    // de ref the window
    // for multiple windows store them in an array
    mainWindow = null;
  });

  var menu = defaultMenu();
  menu.splice(2, 0, {
    label: 'Tools',
    submenu: [
      {
        label: 'Clean Cache',
        click: function (item, focusedWindow) {
          console.log('Cleaned up');
        }
      }
    ]
  });

  // Set top-level application menu, using modified template
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));

});
*/

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