import type { Theme } from '@rootTypes/modules/themes/themes'
import { createContext } from 'react'

interface ThemeProviderState {
  theme: Theme
}

const initialState: ThemeProviderState = {
  theme: 'zinc',
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export { ThemeProviderContext, type ThemeProviderState }
