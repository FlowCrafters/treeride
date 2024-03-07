import { useMutation, useQuery } from '@tanstack/react-query'
import { type FC, type PropsWithChildren, useMemo } from 'react'
import { getExtensions, killExtensionCommand, runExtensionCommand } from '@entities/extensions/api'
import type { ExtensionsContextValue } from './context'
import { ExtensionsContext } from './context'

type ExtensionsProviderProps = PropsWithChildren

const ExtensionsProvider: FC<ExtensionsProviderProps> = ({ children }) => {
  const { data } = useQuery({ queryKey: ['extensions'], queryFn: getExtensions })

  const { mutate: runCommand } = useMutation({ mutationFn: runExtensionCommand })

  const { mutate: killCommand } = useMutation({ mutationFn: killExtensionCommand })

  const value = useMemo<ExtensionsContextValue>(() => {
    return {
      extensions: data ?? [],
      runExtensionCommand: runCommand,
      killExtensionCommand: killCommand,
    }
  }, [data, killCommand, runCommand])

  return (
    <ExtensionsContext.Provider
      value={value}
    >
      {children}
    </ExtensionsContext.Provider>
  )
}

export { ExtensionsProvider }
