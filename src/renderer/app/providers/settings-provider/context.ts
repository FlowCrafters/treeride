import type { ChangeSettingPayload, SettingsSchema } from '@rootTypes/modules/settings'
import { createContext, useContext } from 'react'

interface SettingsContextValue {
  settings: SettingsSchema
  settingsError: string | null
  settingsErrorMeta: Record<string, string> | null
  isLoading: boolean
  reload: () => void
  change: (payload: ChangeSettingPayload) => Promise<void>
}

const SettingsContext = createContext<SettingsContextValue>({} as SettingsContextValue)

const useSettings = () => useContext(SettingsContext)

export { SettingsContext, useSettings, type SettingsContextValue }
