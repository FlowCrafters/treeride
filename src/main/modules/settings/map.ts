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
  },
}

export { settingsMap }
