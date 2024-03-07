import type { FC } from 'react'
import { ThemeProvider } from './providers/theme-provider'
import { QueryProvider } from './providers/query-provider'
import { RouterProvider } from './providers/router-provider'
import { SettingsProvider } from './providers/settings-provider'
import { ExtensionsProvider } from './providers/extensions-provider/provider'

const App: FC = () => {
  return (
    <QueryProvider>
      <SettingsProvider>
        <ExtensionsProvider>
          <ThemeProvider>
            <RouterProvider />
          </ThemeProvider>
        </ExtensionsProvider>
      </SettingsProvider>
    </QueryProvider>
  )
}

export { App }
