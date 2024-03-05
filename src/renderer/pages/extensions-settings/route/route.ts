import { createElement } from 'react'
import type { RouteObject } from 'react-router-dom'
import { pathKeys } from '@shared/lib/react-router'
import { ExtensionSettingsPage } from '../ui/page'

const extensionsSettingsRoute: RouteObject = {
  path: pathKeys.extensionsSettings(),
  element: createElement(ExtensionSettingsPage),
}

export { extensionsSettingsRoute }
