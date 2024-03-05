import type { Theme, ThemeVariant } from '../themes/themes'

interface AppearanceSchema {
  theme: Theme
  themeVariant: ThemeVariant
}

interface HotkeysSchema {
  global: string
}

interface SystemSchema {
  autoStart: boolean
  autoHide: boolean
}

interface SettingsSchema {
  appearance: AppearanceSchema
  hotkeys: HotkeysSchema
  system: SystemSchema
}

type SettingsMap = {
  [key in keyof SettingsSchema]: {
    [subKey in keyof SettingsSchema[key]]: {
      defaultValue: SettingsSchema[key][subKey]
      validator: (value: SettingsSchema[key][subKey]) => boolean
      onFail?: (value: SettingsSchema[key][subKey]) => SettingsSchema[key][subKey]
    }
  }
}

interface GetSettingsResult {
  settings: SettingsSchema
  settingsFilePath: string
  error: string | null
}

interface ChangeSettingPayload {
  category: keyof SettingsSchema
  key: string
  value: unknown
}

type ChangeSettingFn = (payload: ChangeSettingPayload) => Promise<void>

export type { SettingsSchema, SettingsMap, GetSettingsResult, ChangeSettingFn, ChangeSettingPayload }
