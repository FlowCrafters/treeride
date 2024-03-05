import { Navigate, createBrowserRouter } from 'react-router-dom'
import { mainRoute } from '@pages/main'
import { labRoute } from '@pages/lab'
import { helloRoute } from '@pages/hello'
import { settingsRoute } from '@pages/settings'
import { Footer, RootLayout } from '@pages/layouts/root/ui'
import { SettingsDropdown } from '@entities/settings'
import { pathKeys } from '@shared/lib/react-router'

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    children: [
      {
        element: <RootLayout
          footer={(
            <Footer
              settings={<SettingsDropdown />}
            />
          )}
                 />,
        children: [
          {
            index: true,
            element: <Navigate
              to={pathKeys.main()}
                     />,
          },
          mainRoute,
          labRoute,
          helloRoute,
          settingsRoute,
        ],
      },
    ],
  },
])

export { router }
