import { join } from 'node:path'
import process from 'node:process'
import { BrowserWindow, Menu, Tray, app, shell } from 'electron'
import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import icon from '@resources/icon.png?asset'
import { setIPCHandlers } from './ipcHandlers'

function createWindow(): BrowserWindow {
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
      preload: join(__dirname, '../preload/index.mjs'),
      sandbox: false,
    },

  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('blur', () => {
    if (import.meta.env.MAIN_VITE_NO_MAIN_WINDOW_BLUR_HIDE !== 'true')
      mainWindow.hide()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env.ELECTRON_RENDERER_URL)
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  else
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))

  return mainWindow
}

let tray: Tray | null = null
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

  tray = new Tray(icon)
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show', type: 'normal', click: () => {
      const window = BrowserWindow.getAllWindows()[0]
      window?.show()
    } },
    { label: 'Exit', type: 'normal', click: () => {
      app.exit()
    } },
  ])
  tray.setToolTip('TreeRide')
  tray.setContextMenu(contextMenu)

  setIPCHandlers(app)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})
