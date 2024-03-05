import type { GetSettingsResult } from '@rootTypes/modules/settings'

interface IPCHandlers {
  'get-settings': {
    value: undefined
    result: GetSettingsResult
  }
  'set-window-size': {
    value: {
      width: number
      height: number
    }
    result: void
  }
}

export { type IPCHandlers }
