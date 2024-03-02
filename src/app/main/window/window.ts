import process from 'node:process'
import { join } from 'node:path'
import { BrowserWindow } from 'electron'
import icon from '@resources/icon.png?asset'

function makeWindow(): BrowserWindow {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../../preload/index.mjs'),
      sandbox: false,
    },
  })

  return mainWindow
}

export { makeWindow }
