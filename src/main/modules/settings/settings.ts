import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { EventEmitter } from 'node:events'
import { app } from 'electron'
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml'
import type { ChangeSettingPayload, GetSettingsResult, SettingsMap, SettingsSchema } from '@rootTypes/modules/settings'
import { getDefaultValuesFromMap } from './map'

class Settings {
  #settingsMap: SettingsMap
  #emitter: EventEmitter
  settings: GetSettingsResult

  constructor(settingsMap: SettingsMap) {
    this.#settingsMap = settingsMap
    this.#emitter = new EventEmitter()
    this.settings = this.#preflightSettings()
  }

  #getSettingsPath(): string {
    return `${app.getPath('userData')}/settings.yml`
  }

  #parseSettings(settings: string): SettingsSchema {
    const result = parseYaml(settings) as SettingsSchema
    return result
  }

  #readSettings(): SettingsSchema {
    const settingsPath = this.#getSettingsPath()
    const content = readFileSync(settingsPath, 'utf-8')
    const parsed = this.#parseSettings(content)
    return parsed
  }

  #writeSettings(settings: SettingsSchema) {
    if (this.settings.error)
      return

    const settingsPath = this.#getSettingsPath()
    const content = stringifyYaml(settings)
    writeFileSync(settingsPath, content)
  }

  #validateCategories(settings: SettingsSchema) {
    for (const category in this.#settingsMap) {
      if (!settings[category])
        settings[category] = {}
    }
  }

  #validateSettings(settings: SettingsSchema) {
    for (const category in this.#settingsMap) {
      for (const subKey in this.#settingsMap[category]) {
        const { defaultValue, validator, onFail } = this.#settingsMap[category][subKey]
        const value = settings[category][subKey]
        if (!value) {
          settings[category][subKey] = defaultValue
          continue
        }
        if (!validator(value)) {
          if (onFail)
            settings[category][subKey] = onFail(value)
          else
            throw new Error(`Invalid value for ${category}.${subKey}: ${value}`)
        }
      }
    }
  }

  #validateSchema(settings: SettingsSchema) {
    const newSettings = { ...settings }
    this.#validateCategories(newSettings)
    this.#validateSettings(newSettings)
    return newSettings
  }

  changeSetting(payload: ChangeSettingPayload) {
    const settings = this.#readSettings()
    settings[payload.category][payload.key] = payload.value
    this.#validateSchema(settings)
    this.#writeSettings(settings)

    this.settings.settings = settings
    this.#emitter.emit('update', settings)
  }

  reload() {
    this.settings = this.#preflightSettings()
  }

  #preflightSettings(): GetSettingsResult {
    const path = this.#getSettingsPath()
    if (!existsSync(path))
      writeFileSync(path, '')

    try {
      let settings = this.#readSettings()
      settings = this.#validateSchema(settings)
      this.#writeSettings(settings)

      return {
        error: null,
        settings,
        settingsFilePath: path,
      }
    }
    catch (error) {
      return {
        error: (error as Error).message,
        settings: getDefaultValuesFromMap(this.#settingsMap) as SettingsSchema,
        settingsFilePath: path,
      }
    }
  }

  onUpdate(callback: (settings: SettingsSchema) => void) {
    this.#emitter.on('update', callback)
  }
}

export { Settings }
