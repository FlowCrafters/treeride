import type { FC } from 'react'

import { Switch } from '@shared/kit/ui/switch'
import { Label } from '@shared/kit/ui/label'
import { ConfigureBlock } from '@shared/ui'
import { useSettings } from '@app/providers/settings-provider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/kit/ui/select'
import { useTheme } from '@app/providers/theme-provider/context'

const SettingsPage: FC = () => {
  const { settings, change } = useSettings()

  const { themes, appearances } = useTheme()

  return (
    <div
      className="flex flex-col items-center justify-center flex-1"
    >
      <div
        className="w-1/2 flex flex-col gap-4"
      >
        <ConfigureBlock
          description="Choose your theme"
          title="Theme"
        >
          <Label>
            Light theme
          </Label>
          <Select
            value={settings.appearance.lightTheme}
            onValueChange={(value) => {
              change({
                path: 'appearance.lightTheme',
                value,
              })
            }}
          >
            <SelectTrigger
              className="w-[180px]"
            >
              <SelectValue
                placeholder="Theme"
              />
            </SelectTrigger>
            <SelectContent>
              {themes.filter(theme => theme.appearance === 'light').map(theme => (
                <SelectItem
                  key={theme.name}
                  value={theme.name}
                >
                  {theme.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </ConfigureBlock>
        <ConfigureBlock
          description="Choose your theme"
          title="Theme"
        >
          <Label>
            Dark theme
          </Label>
          <Select
            value={settings.appearance.darkTheme}
            onValueChange={(value) => {
              change({
                path: 'appearance.darkTheme',
                value,
              })
            }}
          >
            <SelectTrigger
              className="w-[180px]"
            >
              <SelectValue
                placeholder="Theme"
              />
            </SelectTrigger>
            <SelectContent>
              {themes.filter(theme => theme.appearance === 'dark').map(theme => (
                <SelectItem
                  key={theme.name}
                  value={theme.name}
                >
                  {theme.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </ConfigureBlock>
        <ConfigureBlock
          description="Choose your theme"
          title="Theme"
        >
          <Label>
            Appearance
          </Label>
          <Select
            value={settings.appearance.appearance}
            onValueChange={(value) => {
              change({
                path: 'appearance.appearance',
                value,
              })
            }}
          >
            <SelectTrigger
              className="w-[180px]"
            >
              <SelectValue
                placeholder="Theme"
              />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(appearances).map(([name, value]) => (
                <SelectItem
                  key={name}
                  value={name}
                >
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </ConfigureBlock>
        <ConfigureBlock
          description="Start app on system startup"
          title="Auto start"
        >
          <div
            className="flex items-center space-x-2"
          >
            <Switch
              checked={settings.system.autoStart}
              id="airplane-mode"
              onCheckedChange={checked => change({
                path: 'system.autoStart',
                value: checked,
              })}
            />
            <Label
              htmlFor="airplane-mode"
            >
              Auto start
              {' '}
              {settings.system.autoStart ? 'enabled' : 'disabled'}
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
              checked={settings.system.autoHide}
              id="airplane-mode"
              onCheckedChange={checked => change({
                path: 'system.autoHide',
                value: checked,
              })}
            />
            <Label
              htmlFor="airplane-mode"
            >
              Auto hide
              {' '}
              {settings.system.autoHide ? 'enabled' : 'disabled'}
            </Label>
          </div>
        </ConfigureBlock>
      </div>
    </div>
  )
}

export { SettingsPage }
