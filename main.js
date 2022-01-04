const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    autoHideMenuBar: true
  })

  mainWindow.loadFile(path.join(__dirname, '/src/index.html'))
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if( 0 === BrowserWindow.getAllWindows().length) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if ('darwin' !== process.platform) {
    app.quit()
  }
})
