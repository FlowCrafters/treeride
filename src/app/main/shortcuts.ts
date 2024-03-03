import type { BrowserWindow } from 'electron'
import { globalShortcut } from 'electron'

function registerShortcuts(win: BrowserWindow) {
  globalShortcut.register('CommandOrControl+Space', () => {
    if (win.isVisible()) {
      win.hide()
    }
    else {
      win.show()
      win.focus()
      win.center()
    }
  })
}

function unregisterShortcuts() {
  globalShortcut.unregisterAll()
}

export { registerShortcuts, unregisterShortcuts }
