import process from 'node:process'
import type { Tray } from 'electron'
import { BrowserWindow, app, ipcMain } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { makeWindow } from './window/window'
import { addWindowHandlers } from './window/handlers'
import { makeTray } from './window/tray'

function createWindow(): void {
  const mainWindow = makeWindow()
  addWindowHandlers(mainWindow)
}

let tray: Tray | null = null

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.treeride.app')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
    tray = makeTray(window, app)

    ipcMain.on('wide', (_, wide: boolean) => {
      window.setResizable(true)
      if (wide)
        window.setSize(1200, 800, false)
      else
        window.setSize(800, 500, false)

      window.setResizable(false)
      window.center()
    })
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow()
  })

  app.on('before-quit', () => {
    tray?.destroy()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})
