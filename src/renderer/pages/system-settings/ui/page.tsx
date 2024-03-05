import type { FC } from 'react'
import { Switch } from '@shared/kit/ui/switch'
import { Label } from '@shared/kit/ui/label'
import { ConfigureBlock } from '@shared/ui'

const SystemSettingsPage: FC = () => {
  return (
    <>
      <ConfigureBlock
        description="Start app on system startup"
        title="Auto start"
      >
        <div
          className="flex items-center space-x-2"
        >
          <Switch
            id="airplane-mode"
          />
          <Label
            htmlFor="airplane-mode"
          >
            Auto start enabled
          </Label>
        </div>
      </ConfigureBlock>
      <ConfigureBlock
        description="Center app on system startup"
        title="Auto center"
      >
        <div
          className="flex items-center space-x-2"
        >
          <Switch
            id="airplane-mode"
          />
          <Label
            htmlFor="airplane-mode"
          >
            Auto center enabled
          </Label>
        </div>
      </ConfigureBlock>
      <ConfigureBlock
        description="Hide app on system startup"
        title="Auto hide"
      >
        <div
          className="flex items-center space-x-2"
        >
          <Switch
            id="airplane-mode"
          />
          <Label
            htmlFor="airplane-mode"
          >
            Auto hide enabled
          </Label>
        </div>
      </ConfigureBlock>
    </>
  )
}

export { SystemSettingsPage }
