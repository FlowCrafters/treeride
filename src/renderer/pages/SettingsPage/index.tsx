import type { FC } from 'react'
import { WidePane } from '@shared/layout/root/ui/WidePane'

import { ScrollArea } from '@shared/kit/ui/scroll-area'
import { CpuIcon, KeyboardIcon, PaintbrushIcon } from 'lucide-react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Toggle } from '../../shared/kit/ui/toggle'

const SettingsPage: FC = () => {
  const navigate = useNavigate()

  const { pathname } = useLocation()

  const handleOpenSettings = (path: string) => {
    navigate(`/settings/${path}`)
  }

  return (
    <WidePane
      title="Settings"
    >
      <div
        className="h-full flex"
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
          className="flex flex-1 py-2 px-4"
        >
          <Outlet />
        </div>
      </div>
    </WidePane>
  )
}

export { SettingsPage }
