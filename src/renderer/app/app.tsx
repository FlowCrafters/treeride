import type { FC } from 'react'
import { ThemeProvider } from './providers/theme-provider'
import { QueryProvider } from './providers/query-provider'
import { RouterProvider } from './providers/router-provider'
import { SettingsProvider } from './providers/settings-provider'

const App: FC = () => {
  return (
    <QueryProvider>
      <SettingsProvider>
        <ThemeProvider>
          <RouterProvider />
        </ThemeProvider>
      </SettingsProvider>
    </QueryProvider>
  )
}

export { App }
