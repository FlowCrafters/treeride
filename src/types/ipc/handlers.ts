import type { ChangeSettingPayload, SettingsResult } from '@rootTypes/modules/settings'
import type { ThemeSchema } from '@rootTypes/modules/themes'

interface IPCHandlers {
  'get-settings': {
    value: undefined
    result: SettingsResult
  }
  'get-themes': {
    value: undefined
    result: ThemeSchema[]
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
