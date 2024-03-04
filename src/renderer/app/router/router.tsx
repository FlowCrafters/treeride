import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { MainPage } from '@pages/MainPage'
import { RootLayout } from '@shared/layout/root/ui/RootLayout'
import { SettingsPage } from '@pages/SettingsPage'
import { ExtensionPage } from '@pages/ExtensionPage'
import { LabPage } from '@pages/LabPage'
import { Footer } from '@shared/layout/root/ui/Footer'
import { SettingsDropdown } from '@features/settings/ui/SettingsDropdown'
import { HelloPage } from '@pages/HelloPage'
import { LoaderPage } from '@pages/LoaderPage'
import { SettingsAppearancePage } from '@pages/SettingsPage/SettingsAppearancePage'
import { SettingsHotkeysPage } from '@pages/SettingsPage/SettingsHotkeysPage'
import { SettingsSystemPage } from '@pages/SettingsPage/SettingsSystemPage'

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
            to="loader"
          />
        )}
      >
      </Route>
      <Route
        element={<LoaderPage />}
        path="loader"
      />
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
      >
        <Route
          index
          element={(
            <Navigate
              to="appearance"
            />
          )}
        >
        </Route>
        <Route
          element={<SettingsAppearancePage />}
          path="appearance"
        />
        <Route
          element={<SettingsHotkeysPage />}
          path="hotkeys"
        />
        <Route
          element={<SettingsSystemPage />}
          path="system"
        />
      </Route>
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
