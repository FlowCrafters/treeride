import type { FC } from 'react'
import { ThemeProvider } from './providers/ThemeProvider'
import { QueryProvider } from './providers/QueryProvider'
import { RouterProvider } from './router/RouterProvider'

const App: FC = () => {
  return (
    <QueryProvider>

      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </QueryProvider>
  )
}

export { App }
