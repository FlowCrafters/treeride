import type { FC } from 'react'

import { Switch } from '@shared/kit/ui/switch'
import { Label } from '@shared/kit/ui/label'
import { ConfigureBlock } from '@shared/ui'
import { useSettings } from '@app/providers/settings-provider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/kit/ui/select'
import { settingsThemeElements, settingsThemeVariantElements } from '@entities/settings'
import { RadioGroup, RadioGroupItem } from '@shared/kit/ui/radio-group'

const SettingsPage: FC = () => {
  const { settings, change } = useSettings()

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
            Theme
          </Label>
          <Select
            value={settings.appearance.theme}
            onValueChange={(value) => {
              change({
                category: 'appearance',
                key: 'theme',
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
              {Object.entries(settingsThemeElements).map(([key, value]) => (
                <SelectItem
                  key={key}
                  value={key}
                >
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </ConfigureBlock>
        <ConfigureBlock
          description="Choose your color scheme"
          title="Scheme"
        >
          <Label>
            Theme variant
          </Label>
          <RadioGroup
            value={settings.appearance.themeVariant}
            onValueChange={value => change({
              category: 'appearance',
              key: 'themeVariant',
              value,
            })}
          >
            {Object.entries(settingsThemeVariantElements).map(([key, value]) => (
              <div
                className="flex items-center space-x-2"
                key={key}
              >
                <RadioGroupItem
                  id={key}
                  value={key}
                />
                <Label
                  htmlFor={key}
                >
                  {value}
                </Label>
              </div>
            ))}
          </RadioGroup>
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
                category: 'system',
                key: 'autoStart',
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
                category: 'system',
                key: 'autoHide',
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
