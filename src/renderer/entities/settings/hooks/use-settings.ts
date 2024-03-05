import { useQuery } from '@tanstack/react-query'
import type { GetSettingsResult } from '@rootTypes/modules/settings'
import { getAppSettings } from '../api/api'

interface UseSettingsResult {
  data: GetSettingsResult | null
  error: Error | null
  isLoading: boolean
  retry: () => void
}

function useSettings(): UseSettingsResult {
  const { data, isLoading, isRefetching, error, refetch } = useQuery({ queryKey: ['settings'], queryFn: getAppSettings })

  const retry = () => {
    refetch()
  }

  return {
    data: data ?? null,
    error,
    isLoading: isLoading || isRefetching,
    retry,
  }
}

export { useSettings }
