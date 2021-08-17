const path = require('path')
const { app, BrowserWindow, BrowserView } = require('electron')

const isWin = process.platform === "win32";

function createWindowsControls(mainWindow) {
    const view = new BrowserView({
        webPreferences: {
          nodeIntegration: false,
          nodeIntegrationInWorker: false,
          contextIsolation: true,
          devTools: true,
        //   preload: path.resolve(__dirname, './controlsPreload.js'),
          sandbox: true
        }
      })
      
      mainWindow.setBrowserView(view)
      view.setAutoResize({
        width: true,
        horizontal: true,
      })
      view.setBounds({
        x: 0,
        y: 0,
        height: 36,
        width: mainWindow.getBounds().width,
      });
      console.log(view.getBounds())
      
      view.webContents.loadFile('./controls.html')
}

function createWindow() {
    const options = {
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'add-platform-info.js')
        },
    }

    options.titleBarStyle = 'hiddenInset' // macOS
    if(isWin) {
        options.titleBarStyle = 'hidden'
        options.frame = false
        options.titleBarOverlay = true
        
    }

    const win = new BrowserWindow(options)
    // createWindowsControls(win)
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})