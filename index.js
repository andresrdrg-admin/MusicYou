const {
    app,
    BrowserWindow
} = require('electron')
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'icon.svg') // ruta del archivo SVG
    })

    win.loadURL('https://music.youtube.com')
}

app.whenReady().then(() => {
    createWindow()
})