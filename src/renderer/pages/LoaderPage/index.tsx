import { Spinner } from '@shared/kit/ui/spinner'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Card, CardContent, CardTitle } from '../../shared/kit/ui/card'
import { Button } from '../../shared/kit/ui/button'
import { useSettings } from '../../entities/settings'

const LoaderPage: FC = () => {
  const { isLoading: isLoadingSettings, error: settingsError, retry: retryGetSettings, data: settings } = useSettings()

  const isLoading = isLoadingSettings

  const error = settings?.error ?? settingsError?.message ?? null

  const [errorSource, setErrorSource] = useState<string | null>(null)

  const [errorMeta, setErrorMeta] = useState<Record<string, unknown> | null>(null)

  const retry = () => {
    retryGetSettings()
  }

  useEffect(() => {
    if (settings?.error) {
      setErrorSource('Settings')
      setErrorMeta({
        settingsFilePath: settings.settingsFilePath,
      })
    }
    else {
      setErrorSource(null)
      setErrorMeta(null)
    }
  }, [settings])

  return (
    <>
      <div
        className="flex-1 flex items-center justify-center"
      >
        {isLoading && <Spinner />}
        {!isLoading && (
          <div
            className="flex flex-col gap-4 items-center"
          >

            <div
              className="text-2xl"
            >
              Oops! Something went wrong
            </div>
            <div
              className="text-xl"
            >
              Error in
              {' '}
              <span
                className="text-orange-500"
              >
                {errorSource}
              </span>
              {' '}
              module
            </div>
            <div
              className="text-lg font-light"
            >
              {error}
            </div>
            {!!errorMeta && (
              <Card>
                <CardTitle
                  className="text-sm ml-3 mt-3"
                >
                  Meta
                </CardTitle>
                <CardContent>
                  {JSON.stringify(errorMeta, null, 2)}
                </CardContent>
              </Card>
            )}
            <Button
              className="mt-5"
              size="lg"
              variant="destructive"
              onClick={() => retry()}
            >
              Retry
            </Button>
          </div>
        )}
      </div>
      {!isLoading && !error && (
        <Navigate
          to="/main"
        />
      )}
    </>
  )
}

export { LoaderPage }
