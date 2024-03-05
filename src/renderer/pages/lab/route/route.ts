import { createElement } from 'react'
import type { RouteObject } from 'react-router-dom'
import { pathKeys } from '@shared/lib/react-router'
import { LabPage } from '../ui/page'

const labRoute: RouteObject = {
  path: pathKeys.lab(),
  element: createElement(LabPage),
}

export { labRoute }
