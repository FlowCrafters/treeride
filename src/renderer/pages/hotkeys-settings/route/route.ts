import { createElement } from 'react'
import type { RouteObject } from 'react-router-dom'
import { pathKeys } from '@shared/lib/react-router'
import { HotkeysSettingsPage } from '../ui/page'

const hotkeysSettingsRoute: RouteObject = {
  path: pathKeys.hotkeysSettings(),
  element: createElement(HotkeysSettingsPage),
}

export { hotkeysSettingsRoute }
