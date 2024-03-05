import type { App } from 'electron'
import { BrowserWindow, ipcMain } from 'electron'
import type { IPCHandlers } from '@rootTypes/ipc'
import { Settings, settingsMap } from './modules/settings'

function setIPCHandlers(app: App) {
  ipcMain.on('exit-app', () => {
    app.exit()
  })

  ipcMain.handle('set-window-size', async (_, size: IPCHandlers['set-window-size']['value']) => {
    const { width, height } = size

    const mainWindow = BrowserWindow.getAllWindows()[0]
    mainWindow.setResizable(true)
    mainWindow.setSize(width, height, false)
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
