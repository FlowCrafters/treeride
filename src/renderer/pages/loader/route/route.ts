import { createElement } from 'react'
import type { RouteObject } from 'react-router-dom'
import { pathKeys } from '@shared/lib/react-router'
import { LoaderPage } from '../ui/page'

const loaderRoute: RouteObject = {
  path: pathKeys.loader(),
  element: createElement(LoaderPage),
}

export { loaderRoute }
