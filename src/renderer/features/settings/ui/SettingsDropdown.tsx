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

const SettingsDropdown: FC = () => {
  const navigate = useNavigate()

  const handleGoSettings = () => {
    navigate('/settings')
  }

  const handleGoLab = () => {
    navigate('/lab')
  }

  const handleGoHello = () => {
    navigate('/hello')
  }

  const handleOpenExtension = () => {
    navigate('/extension')
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
          variant="outline"
        >
          <SettingsIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
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
        <DropdownMenuItem
          onClick={handleOpenExtension}
        >
          Open extension
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
