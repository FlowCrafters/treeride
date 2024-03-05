import { Button } from '@shared/kit/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@shared/kit/ui/card'
import { Separator } from '@shared/kit/ui/separator'
import { Spinner } from '@shared/kit/ui/spinner'
import type { FC } from 'react'

interface LoaderError {
  message: string
  meta?: Record<string, string>
}

interface LoaderProps {
  moduleName: string
  isLoading: boolean
  error: LoaderError | null
  onRetry: () => void
}

const Loader: FC<LoaderProps> = ({ isLoading, moduleName, error, onRetry }) => {
  return (
    <div
      className="flex flex-col flex-1 items-center justify-center"
    >
      {isLoading && <Spinner />}
      {!isLoading && !!error && (
        <div
          className="flex  w-full flex-col gap-3 items-center px-4"
        >
          <div
            className="text-3xl"
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
              {moduleName}
            </span>
            {' '}
            module
          </div>
          <div
            className="text-lg font-light"
          >
            {error.message}
          </div>
          {!!error.meta && (
            <Card
              className="w-full mt-4"
            >
              <CardHeader>
                <CardTitle>
                  Meta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Separator
                  className="mb-4"
                />

                {Object.entries(error.meta).map(([key, value]) => (
                  <div
                    key={key}
                  >
                    <span
                      className="text-accent"
                    >
                      {key}
                      :
                    </span>
                    {' '}
                    <span
                      className="text-sm font-light break-words"
                    >
                      {value}
                    </span>
                  </div>
                ))}

              </CardContent>
            </Card>
          )}
          <Button
            className="mt-4"
            size="lg"
            onClick={onRetry}
          >
            Retry
          </Button>
        </div>
      )}
    </div>
  )
}

export { Loader }
