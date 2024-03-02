import type { BrowserWindow } from 'electron'
import { Menu, Tray } from 'electron'
import icon from '@resources/icon.png?asset'
import App = Electron.App

function makeTray(window: BrowserWindow | null = null, app: App) {
  const tray = new Tray(icon)
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show', type: 'normal', click: () => {
      window?.show()
    } },
    { label: 'Settings', type: 'normal' },
    { label: 'Exit', type: 'normal', click: () => {
      app.exit()
    } },
  ])

  tray.setToolTip('TreeRide')
  tray.setContextMenu(contextMenu)

  tray.on('double-click', () => {
    window?.show()
  })

  return tray
}

export { makeTray }
