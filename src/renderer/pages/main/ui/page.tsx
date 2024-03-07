import { useExtensions } from '@app/providers/extensions-provider/context'
import { Button } from '@shared/kit/ui/button'
import type { FC } from 'react'

const MainPage: FC = () => {
  const { extensions, runExtensionCommand, killExtensionCommand } = useExtensions()
  return (
    <div>
      {extensions.map(extension => (
        <div
          key={extension.meta.name}
        >
          {extension.meta.commands.map(command => (
            <Button
              key={command.name}
              onClick={() => runExtensionCommand({ extensionName: extension.meta.name, commandName: command.name })}
            >
              {command.title}
            </Button>
          ))}
        </div>
      ))}
      <Button
        variant="outline"
        onClick={() => killExtensionCommand()}
      >
        Kill process
      </Button>
    </div>
  )
}

export { MainPage }
