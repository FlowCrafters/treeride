import type { FC, PropsWithChildren } from 'react'

type RootLayoutProps = PropsWithChildren

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div
      className="h-full px-2 py-1"
    >
      {children}
    </div>
  )
}

export { RootLayout }
