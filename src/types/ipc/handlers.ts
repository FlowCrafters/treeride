import type { ChangeSettingPayload, GetSettingsResult } from '@rootTypes/modules/settings'

interface IPCHandlers {
  'get-settings': {
    value: undefined
    result: GetSettingsResult
  }
  'change-setting': {
    value: ChangeSettingPayload
    result: void
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
