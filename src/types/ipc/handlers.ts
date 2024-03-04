import type { GetSettingsResult } from '@rootTypes/modules/settings'

interface IPCHandlers {
  'get-settings': {
    value: undefined
    result: GetSettingsResult
  }
  'wide': {
    value: boolean
    result: void
  }
}

export { type IPCHandlers }
