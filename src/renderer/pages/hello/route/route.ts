import { createElement } from 'react'
import type { RouteObject } from 'react-router-dom'
import { pathKeys } from '@shared/lib/react-router'
import { HelloPage } from '../ui/page'

const helloRoute: RouteObject = {
  path: pathKeys.hello(),
  element: createElement(HelloPage),
}

export { helloRoute }
