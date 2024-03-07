import type { FC } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shared/kit/ui/dropdown-menu'
import { SettingsIcon } from 'lucide-react'
import { Button } from '@shared/kit/ui/button'
import { useNavigate } from 'react-router-dom'
import { pathKeys } from '@shared/lib/react-router'

const SettingsDropdown: FC = () => {
  const navigate = useNavigate()

  const handleGoSettings = () => {
    navigate(pathKeys.settings())
  }

  const handleGoLab = () => {
    navigate(pathKeys.lab())
  }

  const handleGoHello = () => {
    navigate(pathKeys.hello())
  }

  const handleExit = () => {
    window.electron.ipcRenderer.send('exit-app')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
      >
        <Button
          size="icon"
        >
          <SettingsIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={16}
      >
        <DropdownMenuItem
          onClick={handleGoSettings}
        >
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleGoHello}
        >
          Hello
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleGoLab}
        >
          Lab
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleExit}
        >
          Exit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { SettingsDropdown }
