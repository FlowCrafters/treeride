import type { FC } from 'react'
import { RootLayout } from '@shared/layout/root/ui/RootLayout'
import { ThemeProvider } from './providers/ThemeProvider'

const App: FC = () => {
  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="theme"
    >
      <RootLayout>
        <div
          className="h-full flex flex-col gap-4 items-center justify-center"
        >
          <div
            className="text-5xl"
          >
            TreeRide
          </div>
          <div>Open-Source multi-platform productivity boost tool</div>
        </div>
      </RootLayout>
    </ThemeProvider>
  )
}

export { App }
