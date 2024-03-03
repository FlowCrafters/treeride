import type { FC } from 'react'
import { ThemeProvider } from './providers/ThemeProvider'
import { RouterProvider } from './router/RouterProvider'

const App: FC = () => {
  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="theme"
    >
      <RouterProvider />
    </ThemeProvider>
  )
}

export { App }
