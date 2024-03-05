import type { FC, PropsWithChildren } from 'react'

interface ConfigureBlockProps extends PropsWithChildren {
  title: string
  description: string
}

const ConfigureBlock: FC<ConfigureBlockProps> = ({ children }) => {
  return (
    <div
      className="p-4 border rounded-md flex flex-col gap-4"
    >
      {children}
    </div>
  )
}

export { ConfigureBlock }
