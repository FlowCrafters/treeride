import type { App } from 'electron'
import { BrowserWindow, ipcMain } from 'electron'
import type { IPCHandlers } from '@rootTypes/ipc'
import type { Settings } from './modules/settings'
import type { Themes } from './modules/themes/themes'
import type { Extensions } from './modules/extensions'

function setIPCHandlers(app: App, settings: Settings, themes: Themes, extensions: Extensions) {
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

  ipcMain.handle('get-extensions', async () => {
    return extensions.extensions
  })

  ipcMain.handle('run-extension-command', async (_, payload: IPCHandlers['run-extension-command']['value']) => {
    extensions.runExtensionCommand(payload)
  })

  ipcMain.handle('kill-extension-command', async (_) => {
    extensions.killExtensionCommand()
  })

  ipcMain.handle('get-themes', async () => {
    return themes.themes
  })
}

export { setIPCHandlers }
