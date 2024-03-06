import type { ThemeSchema } from '@rootTypes/modules/themes'
import { createContext, useContext } from 'react'

interface ThemeProviderState {
  themes: ThemeSchema[]
  appearances: Record<string, string>
}

const initialState: ThemeProviderState = {
  themes: [],
  appearances: {},
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const useTheme = () => useContext(ThemeProviderContext)

export { ThemeProviderContext, type ThemeProviderState, useTheme }
