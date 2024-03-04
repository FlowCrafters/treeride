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

export type { SettingsSchema, SettingsMap, GetSettingsResult }
