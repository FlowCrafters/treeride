import { Navigate, createBrowserRouter } from 'react-router-dom'
import { mainRoute } from '@pages/main'
import { labRoute } from '@pages/lab'
import { helloRoute } from '@pages/hello'
import { loaderRoute } from '@pages/loader'
import { SettingsLayout, settingsRoute } from '@pages/settings'
import { appearanceSettingsRoute } from '@pages/appearance-settings'
import { hotkeysSettingsRoute } from '@pages/hotkeys-settings'
import { systemSettingsRoute } from '@pages/system-settings'
import { extensionsSettingsRoute } from '@pages/extensions-settings'
import { Footer, RootLayout } from '@pages/layouts/root/ui'
import { SettingsDropdown } from '@entities/settings'

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
              to="loader"
                     />,
          },
          mainRoute,
          labRoute,
          helloRoute,
          loaderRoute,
          {
            ...settingsRoute,
            index: false,
            element: (
              <SettingsLayout
                title="Settings"
              >
                {settingsRoute.element}
              </SettingsLayout>
            ),
            children: [
              {
                index: true,
                element: <Navigate
                  to="appearance"
                         />,
              },
              appearanceSettingsRoute,
              hotkeysSettingsRoute,
              systemSettingsRoute,
              extensionsSettingsRoute,
            ],
          },
        ],
      },
    ],
  },
])

export { router }
