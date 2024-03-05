import { createElement } from 'react'
import type { RouteObject } from 'react-router-dom'
import { pathKeys } from '@shared/lib/react-router'
import { MainPage } from '../ui/page'

const mainRoute: RouteObject = {
  path: pathKeys.main(),
  element: createElement(MainPage),
}

export { mainRoute }
