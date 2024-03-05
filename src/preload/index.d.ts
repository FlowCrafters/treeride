import type { ElectronAPI } from '@electron-toolkit/preload'
import type { CustomAPI } from './api'

declare global {

  interface Window {
    electron: ElectronAPI
    api: CustomAPI
  }
}
