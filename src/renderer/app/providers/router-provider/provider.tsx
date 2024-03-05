import type { FC } from 'react'
import { RouterProvider as Provider } from 'react-router-dom'
import { router } from './router'

const RouterProvider: FC = () => {
  return (
    <Provider
      router={router}
    />
  )
}

export { RouterProvider }
