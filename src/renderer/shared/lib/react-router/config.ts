const pathKeys = {
  root: '/',
  loader: () => pathKeys.root.concat('loader/'),
  main: () => pathKeys.root.concat('main/'),
  hello: () => pathKeys.root.concat('hello/'),
  lab: () => pathKeys.root.concat('lab/'),
  settings: () => pathKeys.root.concat('settings/'),
  appearanceSettings: () => pathKeys.root.concat('settings/appearance/'),
  hotkeysSettings: () => pathKeys.root.concat('settings/hotkeys/'),
  systemSettings: () => pathKeys.root.concat('settings/system/'),
  extensionsSettings: () => pathKeys.root.concat('settings/extensions/'),
} as const

export { pathKeys }
