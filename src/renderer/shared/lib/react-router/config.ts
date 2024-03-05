const pathKeys = {
  root: '/',
  main: () => pathKeys.root.concat('main/'),
  hello: () => pathKeys.root.concat('hello/'),
  lab: () => pathKeys.root.concat('lab/'),
  settings: () => pathKeys.root.concat('settings/'),
} as const

export { pathKeys }
