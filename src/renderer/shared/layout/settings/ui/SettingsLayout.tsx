import type { FC, PropsWithChildren } from 'react'

interface SettingsLayoutProps extends PropsWithChildren {
  title: string
}

const SettingsLayout: FC<SettingsLayoutProps> = ({ title, children }) => {
  return (
    <div
      className="flex flex-col flex-1 gap-4"
    >
      <div
        className="text-2xl"
      >
        {title}
      </div>

      <div
        className="flex flex-col  gap-4"
      >
        {children}
      </div>

    </div>
  )
}

export { SettingsLayout }
