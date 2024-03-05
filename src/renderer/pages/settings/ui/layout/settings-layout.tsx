import { ScrollArea } from '@shared/kit/ui/scroll-area'
import { Toggle } from '@shared/kit/ui/toggle'
import { pathKeys } from '@shared/lib/react-router'
import { WidePane } from '@shared/ui'
import { CpuIcon, KeyboardIcon, PaintbrushIcon } from 'lucide-react'
import type { FC, PropsWithChildren } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface SettingsLayoutProps extends PropsWithChildren {
  title: string
}

const SettingsLayout: FC<SettingsLayoutProps> = ({ title, children }) => {
  const navigate = useNavigate()

  const { pathname } = useLocation()

  const handleOpenSettings = (path: string) => {
    navigate(`${pathKeys.settings()}${path}`)
  }

  return (
    <WidePane
      title={title}
    >
      <div
        className="flex gap-4"
      >
        <ScrollArea
          className="w-1/6 h-full border-r border-solid py-2 pr-3"
        >
          <div
            className="flex flex-col gap-2"
          >
            <Toggle
              className="text-left gap-2 items-center justify-start"
              pressed={pathname === '/settings/appearance'}
              variant="outline"
              onClick={() => handleOpenSettings('appearance')}
            >
              <PaintbrushIcon />
              Appearance
            </Toggle>
            <Toggle
              className="text-left gap-2 items-center justify-start"
              pressed={pathname === '/settings/hotkeys'}
              variant="outline"
              onClick={() => handleOpenSettings('hotkeys')}
            >
              <KeyboardIcon />
              Hotkeys
            </Toggle>
            <Toggle
              className="text-left gap-2 items-center justify-start"
              pressed={pathname === '/settings/system'}
              variant="outline"
              onClick={() => handleOpenSettings('system')}
            >
              <CpuIcon />
              System
            </Toggle>
          </div>
        </ScrollArea>
        <div
          className="flex flex-col flex-1 gap-4"
        >
          {children}
        </div>
      </div>
    </WidePane>
  )
}

export { SettingsLayout }
