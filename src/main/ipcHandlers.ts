import type { App } from 'electron'
import { BrowserWindow, ipcMain } from 'electron'
import type { IPCHandlers } from '@rootTypes/ipc'
import type { Settings } from './modules/settings'
import type { Themes } from './modules/themes/themes'

function setIPCHandlers(app: App, settings: Settings, themes: Themes) {
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
    settings.changeSetting(payload.path, payload.value)
  })

  ipcMain.handle('get-settings', async () => {
    settings.reload()
    const { result } = settings
    return result
  })

  ipcMain.handle('get-themes', async () => {
    return themes.themes
  })
}

export { setIPCHandlers }
