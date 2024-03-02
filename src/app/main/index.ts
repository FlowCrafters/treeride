import process from 'node:process'
import { BrowserWindow, app } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { makeWindow } from './window/window'
import { addWindowHandlers } from './window/handlers'

function createWindow(): void {
  const mainWindow = makeWindow()
  addWindowHandlers(mainWindow)
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.treeride.app')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})
