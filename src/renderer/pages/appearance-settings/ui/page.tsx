import type { FC } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/kit/ui/select'
import { RadioGroup, RadioGroupItem } from '@shared/kit/ui/radio-group'
import { Label } from '@shared/kit/ui/label'
import { settingsThemeElements, settingsThemeVariantElements } from '@entities/settings'
import { ConfigureBlock } from '@shared/ui'

const AppearanceSettingsPage: FC = () => {
  return (
    <>
      <ConfigureBlock
        description="Choose your theme"
        title="Theme"
      >
        {/* <Alert
          variant="default"
        >
          <RocketIcon
            className="h-4 w-4"
          />
          <AlertTitle>Vibrancy theme selected</AlertTitle>
          <AlertDescription>
            Theme will be applied after restart
          </AlertDescription>
        </Alert> */}
        <Select>
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
        <RadioGroup>
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
        description="Choose your accent color"
        title="Accent color"
      >
        Block
      </ConfigureBlock>
    </>
  )
}

export { AppearanceSettingsPage }
