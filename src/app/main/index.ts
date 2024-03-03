import process from 'node:process'
import type { Tray } from 'electron'
import { BrowserWindow, app } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { makeWindow } from './window/window'
import { addWindowHandlers } from './window/handlers'
import { makeTray } from './window/tray'
import { registerShortcuts, unregisterShortcuts } from './shortcuts'

function createWindow(): void {
  const mainWindow = makeWindow()
  addWindowHandlers(mainWindow)
}

let tray: Tray | null = null

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.treeride.app')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
    registerShortcuts(window)

    tray = makeTray(window, app)
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow()
  })

  app.on('before-quit', () => {
    tray?.destroy()
  })

  app.on('will-quit', () => {
    unregisterShortcuts()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})
