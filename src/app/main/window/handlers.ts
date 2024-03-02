import process from 'node:process'
import { join } from 'node:path'
import type { BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'
import { shell } from 'electron'
import { checkEnvVar } from '@shared/env/utils/checkEnvVar'

function addWindowHandlers(win: BrowserWindow) {
  win.on('ready-to-show', () => {
    win.show()
  })

  win.on('blur', () => {
    if (!checkEnvVar(import.meta.env.MAIN_VITE_NO_MAIN_WINDOW_BLUR_HIDE, 'boolean', true))
      win.hide()
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env.ELECTRON_RENDERER_URL)
    win.loadURL(process.env.ELECTRON_RENDERER_URL)
  else win.loadFile(join(__dirname, '../../renderer/index.html'))
}

export { addWindowHandlers }
