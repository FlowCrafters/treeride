import type { FC, ReactNode } from 'react'

interface FooterProps {
  settings: ReactNode
}

const Footer: FC<FooterProps> = ({ settings }) => {
  return (
    <div
      className="border-t border-solid p-2 win-drag flex items-start"
    >
      <div
        className="win-no-drag"
      >
        {settings}
      </div>
    </div>
  )
}

export { Footer }
