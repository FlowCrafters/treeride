import type { FC, PropsWithChildren } from 'react'

type PageWrapperProps = PropsWithChildren

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div
      className="flex flex-col flex-1"
    >
      {children}
    </div>
  )
}

export { PageWrapper }
