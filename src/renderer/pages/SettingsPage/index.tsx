import type { FC } from 'react'
import { WidePane } from '@shared/layout/root/ui/WidePane'

const SettingsPage: FC = () => {
  return (
    <WidePane
      title="Settings"
    >
      <div>Settings page</div>
    </WidePane>
  )
}

export { SettingsPage }
