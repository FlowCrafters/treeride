import process from 'node:process'
import { join } from 'node:path'
import { BrowserWindow } from 'electron'
import icon from '@resources/icon.png?asset'

function makeWindow(): BrowserWindow {
  const mainWindow = new BrowserWindow({
    title: 'TreeRide',
    frame: false,
    width: 800,
    height: 500,
    skipTaskbar: true,
    resizable: false,
    maximizable: false,
    minimizable: false,
    closable: false,
    roundedCorners: true,
    backgroundMaterial: 'acrylic',
    vibrancy: 'window',
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
