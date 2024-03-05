import type { App } from 'electron'
import { BrowserWindow, ipcMain } from 'electron'
import type { IPCHandlers } from '@rootTypes/ipc'
import type { Settings } from './modules/settings'

function setIPCHandlers(app: App, settings: Settings) {
  ipcMain.on('exit-app', () => {
    app.exit()
  })

  ipcMain.handle('set-window-size', async (_, size: IPCHandlers['set-window-size']['value']) => {
    const { width, height } = size

    const mainWindow = BrowserWindow.getAllWindows()[0]
    mainWindow.setResizable(true)
    mainWindow.setSize(width, height, false)
    mainWindow.setResizable(false)
  })

  ipcMain.handle('change-setting', async (_, payload: IPCHandlers['change-setting']['value']) => {
    settings.changeSetting(payload)
  })

  ipcMain.handle('get-settings', async () => {
    settings.reload()
    const result = settings.settings
    return result
  })
}

export { setIPCHandlers }
