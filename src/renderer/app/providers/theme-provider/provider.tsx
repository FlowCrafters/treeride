import { type FC, type PropsWithChildren, useCallback, useEffect, useMemo, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getThemes } from '@entities/themes/api'
import type { ThemeSchema } from '@rootTypes/modules/themes'
import { hexToRgba } from '@shared/colors'
import { useSettings } from '../settings-provider'
import type { ThemeProviderState } from './context'
import { ThemeProviderContext } from './context'

type ThemeProviderProps = PropsWithChildren

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}) => {
  const appearances = useRef({
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  })

  const { settings } = useSettings()

  const { data: themes } = useQuery({
    queryKey: ['themes'],
    queryFn: getThemes,
  })

  const value = useMemo<ThemeProviderState>(() => ({
    themes: themes ?? [],
    appearances: appearances.current,
  }), [themes])

  const transformThemeToCSS = (theme: ThemeSchema) => {
    return `
      :root {
        --treeride-theme--background: ${hexToRgba(theme.colors.background, 0.4)};
        --treeride-theme--background-secondary: ${hexToRgba(theme.colors.backgroundSecondary, 0.4)};
        --treeride-theme--text: ${theme.colors.text}
      }
    `
  }

  const getCurrentTheme = useCallback(() => {
    const { appearance: { appearance, darkTheme, lightTheme } } = settings

    const currentAppearance = appearance === 'system' ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : appearance

    const currentTheme = currentAppearance === 'dark' ? darkTheme : lightTheme

    return currentTheme
  }, [settings])

  useEffect(() => {
    const currentTheme = getCurrentTheme()
    const findTheme = themes?.find(theme => theme.name === currentTheme)

    if (findTheme) {
      const css = transformThemeToCSS(findTheme)
      const style = document.createElement('style')
      style.id = 'theme-vars'
      style.innerHTML = css
      document.head.appendChild(style)
    }

    return () => {
      document.getElementById('theme-vars')?.remove()
    }
  }, [themes, settings?.appearance, getCurrentTheme])

  return (
    <ThemeProviderContext.Provider
      value={value}
    >
      {children}
    </ThemeProviderContext.Provider>
  )
}

export { ThemeProvider }
