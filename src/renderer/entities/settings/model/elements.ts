import type { Theme, ThemeVariant } from '@rootTypes/modules/themes/themes'

const settingsThemeElements: Record<Theme, string> = {
  treeride: 'TreeRide',
  zinc: 'Zinc',
} as const

const settingsThemeVariantElements: Record<ThemeVariant, string> = {
  dark: 'Dark',
  light: 'Light',
  system: 'System',
} as const

export { settingsThemeElements, settingsThemeVariantElements }
