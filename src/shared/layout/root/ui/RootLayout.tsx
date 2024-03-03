import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface RootLayoutProps {
  footer: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ footer }) => {
  return (
    <div
      className="h-full flex flex-col"
    >
      <div
        className="flex flex-col flex-1"
      >
        <Outlet />
      </div>
      {footer}
    </div>
  )
}

export { RootLayout }
