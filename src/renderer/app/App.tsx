import type { FC } from 'react'
import { ThemeProvider } from './providers/theme-provider'
import { QueryProvider } from './providers/query-provider'
import { RouterProvider } from './providers/router-provider'

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
