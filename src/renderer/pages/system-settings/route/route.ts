import { createElement } from 'react'
import type { RouteObject } from 'react-router-dom'
import { pathKeys } from '@shared/lib/react-router'
import { SystemSettingsPage } from '../ui/page'

const systemSettingsRoute: RouteObject = {
  path: pathKeys.systemSettings(),
  element: createElement(SystemSettingsPage),
}

export { systemSettingsRoute }
