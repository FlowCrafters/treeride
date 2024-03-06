import { changeSetting, getAppSettings } from '@entities/settings'
import type { SettingsSchema } from '@rootTypes/modules/settings'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { type FC, type PropsWithChildren, useCallback, useMemo } from 'react'
import { Loader } from '@shared/ui'
import type { SettingsContextValue } from './context'
import { SettingsContext } from './context'

type SettingsProviderProps = PropsWithChildren

const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const queryClient = useQueryClient()

  const { data, error, isLoading: isQueryLoading, isRefetching, refetch } = useQuery({ queryKey: ['settings'], queryFn: getAppSettings })

  const { mutateAsync: change } = useMutation({
    mutationKey: ['changeSetting'],
    mutationFn: changeSetting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settings'] })
    },
  })

  const isLoading = isQueryLoading || isRefetching

  const settingsError = error?.message ?? data?.error ?? null

  const settingsErrorMeta = useMemo<Record<string, string>>(() => {
    if (!settingsError)
      return {}

    const meta: Record<string, string> = {
      settingsFilePath: data?.filePath ?? '',
    }
    return meta
  }, [data?.filePath, settingsError])

  const reload = useCallback(() => {
    refetch()
  }, [refetch])

  const value = useMemo<SettingsContextValue>(() => {
    return {
      settings: data?.data ?? {} as SettingsSchema,
      settingsError,
      settingsErrorMeta,
      isLoading,
      reload,
      change,
    }
  }, [data, isLoading, settingsError, settingsErrorMeta, reload, change])

  if (!data || isLoading || settingsError) {
    return (
      <Loader
        error={settingsError
          ? {
              message: settingsError,
              meta: settingsErrorMeta,
            }
          : null}
        isLoading={isLoading}
        moduleName="Settings"
        onRetry={refetch}
      />
    )
  }

  return (
    <SettingsContext.Provider
      value={value}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export { SettingsProvider }
