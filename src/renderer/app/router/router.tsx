import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { MainPage } from '@pages/MainPage'
import { RootLayout } from '@shared/layout/root/ui/RootLayout'
import { SettingsPage } from '@pages/SettingsPage'
import { ExtensionPage } from '@pages/ExtensionPage'
import { LabPage } from '@pages/LabPage'
import { Footer } from '@shared/layout/root/ui/Footer'
import { SettingsDropdown } from '@features/settings/ui/SettingsDropdown'
import { HelloPage } from '@pages/HelloPage'

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={(
        <RootLayout
          footer={(
            <Footer
              settings={<SettingsDropdown />}
            />
          )}
        />
      )}
      path="/"
    >
      <Route
        index
        element={(
          <Navigate
            to="main"
          />
        )}
      >
      </Route>
      <Route
        element={<MainPage />}
        path="main"
      />
      <Route
        element={<HelloPage />}
        path="hello"
      />
      <Route
        element={<SettingsPage />}
        path="settings"
      />
      <Route
        element={<ExtensionPage />}
        path="extension"
      />
      <Route
        element={<LabPage />}
        path="lab"
      />
    </Route>,
  ),
)

export { router }
