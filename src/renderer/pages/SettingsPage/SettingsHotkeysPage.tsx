import type { FC } from 'react'
import { SettingsLayout } from '@shared/layout/settings/ui/SettingsLayout'
import { SettingsBlock } from '@shared/layout/settings/ui/SettingsBlock'
import { Button } from '@shared/kit/ui/button'

const SettingsHotkeysPage: FC = () => {
  return (
    <SettingsLayout
      title="Hotkeys"
    >
      <SettingsBlock
        description="Choose your main hotkey"
        title="Main hotkey"
      >
        <div
          className="flex flex-col items-start gap-2"
        >
          <div>Current hotkey: Ctrl+Shift+S</div>
          <Button>Change</Button>
        </div>
      </SettingsBlock>
    </SettingsLayout>
  )
}

export { SettingsHotkeysPage }
