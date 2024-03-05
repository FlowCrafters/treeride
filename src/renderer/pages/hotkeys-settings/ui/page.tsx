import type { FC } from 'react'
import { Button } from '@shared/kit/ui/button'
import { ConfigureBlock } from '@shared/ui'

const HotkeysSettingsPage: FC = () => {
  return (
    <>
      <ConfigureBlock
        description="Choose your main hotkey"
        title="Main hotkey"
      >
        <div
          className="flex flex-col items-start gap-2"
        >
          <div>Current hotkey: Ctrl+Shift+S</div>
          <Button>Change</Button>
        </div>
      </ConfigureBlock>
    </>
  )
}

export { HotkeysSettingsPage }
