import type { SettingsMap } from '@rootTypes/modules/settings'

const settingsMap: SettingsMap = {
  appearance: {
    themeVariant: {
      defaultValue: 'system',
      validator: (value: string) => ['system', 'light', 'dark'].includes(value),
    },
    theme: {
      defaultValue: 'zinc',
      validator: (value: string) => ['zinc', 'treeride'].includes(value),
    },
  },
  hotkeys: {
    global: {
      defaultValue: 'none',
      validator: (value: string) => !!value,
    },
  },
  system: {
    autoStart: {
      defaultValue: false,
      validator: (value: boolean) => typeof value === 'boolean',
    },
    autoHide: {
      defaultValue: false,
      validator: (value: boolean) => typeof value === 'boolean',
    },
  },
}

function getDefaultValuesFromMap(map: SettingsMap) {
  const result: Record<string, any> = {}
  for (const category in map) {
    result[category] = {}
    for (const subKey in map[category])
      result[category][subKey] = map[category][subKey].defaultValue
  }

  return result
}

export { settingsMap, getDefaultValuesFromMap }
