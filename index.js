
const path = require('path')
const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        titleBarStyle: 'hidden',

        titleBarOverlay: {
            color: '#2f3241',
            symbolColor: '#74b1be'
        },

        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
