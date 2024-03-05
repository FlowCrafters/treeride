import type { ChangeSettingFn, SettingsSchema } from '@rootTypes/modules/settings'
import { createContext, useContext } from 'react'

interface SettingsContextValue {
  settings: SettingsSchema
  settingsError: string | null
  settingsErrorMeta: Record<string, string> | null
  isLoading: boolean
  reload: () => void
  change: ChangeSettingFn
}

const SettingsContext = createContext<SettingsContextValue>({} as SettingsContextValue)

const useSettings = () => useContext(SettingsContext)

export { SettingsContext, useSettings, type SettingsContextValue }
