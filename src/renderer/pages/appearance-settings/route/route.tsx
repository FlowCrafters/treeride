import { createElement } from 'react'
import type { RouteObject } from 'react-router-dom'
import { pathKeys } from '@shared/lib/react-router'
import { AppearanceSettingsPage } from '../ui/page'

const appearanceSettingsRoute: RouteObject = {
  path: pathKeys.appearanceSettings(),
  element: createElement(AppearanceSettingsPage),
}

export { appearanceSettingsRoute }
