import type { FC } from 'react'
import { SettingsLayout } from '@shared/layout/settings/ui/SettingsLayout'
import { SettingsBlock } from '@shared/layout/settings/ui/SettingsBlock'
import { Switch } from '@shared/kit/ui/switch'
import { Label } from '@shared/kit/ui/label'

const SettingsSystemPage: FC = () => {
  return (
    <SettingsLayout
      title="Hotkeys"
    >
      <SettingsBlock
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
      </SettingsBlock>
      <SettingsBlock
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
      </SettingsBlock>
      <SettingsBlock
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
      </SettingsBlock>
    </SettingsLayout>
  )
}

export { SettingsSystemPage }
