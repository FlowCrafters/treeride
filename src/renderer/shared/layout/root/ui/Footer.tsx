import type { FC, ReactNode } from 'react'

interface FooterProps {
  settings: ReactNode
}

const Footer: FC<FooterProps> = ({ settings }) => {
  return (
    <div
      className="border-t border-solid p-2"
    >
      {settings}
    </div>
  )
}

export { Footer }
