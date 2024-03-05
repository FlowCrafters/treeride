import type { FC, PropsWithChildren } from 'react'
import { useEffect, useMemo } from 'react'
import { useSettings } from '../settings-provider'
import type { ThemeProviderState } from './context'
import { ThemeProviderContext } from './context'

type ThemeProviderProps = PropsWithChildren

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}) => {
  const { settings } = useSettings()

  const themeSettings = settings?.appearance ?? {
    theme: 'zinc',
    themeVariant: 'system',
  }

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (themeSettings.themeVariant === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(themeSettings.themeVariant)
  }, [themeSettings.themeVariant])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('zinc', 'treeride')
    root.classList.add(themeSettings.theme)
  }, [themeSettings.theme])

  const value = useMemo<ThemeProviderState>(() => ({
    theme: themeSettings.theme,
    themeVariant: themeSettings.themeVariant,
  }), [themeSettings.theme, themeSettings.themeVariant])

  return (
    <ThemeProviderContext.Provider
      value={value}
    >
      {children}
    </ThemeProviderContext.Provider>
  )
}

export { ThemeProvider }
