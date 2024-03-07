import type { Extension, RunExtensionCommandPayload } from '@rootTypes/modules/extensions/types'
import { createContext, useContext } from 'react'

interface ExtensionsContextValue {
  extensions: Extension[]
  runExtensionCommand: (payload: RunExtensionCommandPayload) => void
  killExtensionCommand: () => void
}

const ExtensionsContext = createContext<ExtensionsContextValue>({} as ExtensionsContextValue)

const useExtensions = () => useContext(ExtensionsContext)

export { ExtensionsContext, useExtensions, type ExtensionsContextValue }
