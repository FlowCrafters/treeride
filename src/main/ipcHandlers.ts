import type { App } from 'electron'
import { BrowserWindow, ipcMain } from 'electron'
import { Settings, settingsMap } from './modules/settings'

function setIPCHandlers(app: App) {
  ipcMain.on('exit-app', () => {
    app.exit()
  })

  ipcMain.on('wide', (_, wide: boolean) => {
    const mainWindow = BrowserWindow.getAllWindows()[0]
    mainWindow.setResizable(true)
    if (wide)
      mainWindow.setSize(1200, 800, false)
    else
      mainWindow.setSize(800, 500, false)

    mainWindow.setResizable(false)
    mainWindow.center()
  })

  ipcMain.handle('get-settings', async () => {
    const settings = new Settings(settingsMap)
    const result = settings.preflightSettings()
    return result
  })
}

export { setIPCHandlers }
