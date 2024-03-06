import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { EventEmitter } from 'node:events'
import objectPath from 'object-path'
import { app } from 'electron'
import { type SettingsResult, type SettingsSchema, settingsSchema } from '@rootTypes/modules/settings'
import { parseYaml, stringifyYaml } from 'src/main/utils/yaml'

class Settings {
  #emitter: EventEmitter
  result: SettingsResult

  constructor() {
    this.#emitter = new EventEmitter()
    this.result = this.#preflightSettings()
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
    const parsed = this.#parseSettings(content) ?? {}
    return parsed
  }

  #writeSettings(settings: SettingsSchema) {
    const settingsPath = this.#getSettingsPath()
    const content = stringifyYaml(settings)
    writeFileSync(settingsPath, content)
  }

  changeSetting(path: string, value: unknown) {
    let settings = this.#readSettings()
    objectPath.set(settings, path, value)
    settings = settingsSchema.parse(settings)
    this.#writeSettings(settings)

    this.result.data = settings
    this.result.error = null
    this.#emitter.emit('update', settings)
  }

  reload() {
    this.result = this.#preflightSettings()
  }

  #preflightSettings(): SettingsResult {
    const path = this.#getSettingsPath()
    if (!existsSync(path))
      writeFileSync(path, '')

    try {
      let settings: SettingsSchema = this.#readSettings()
      settings = settingsSchema.parse(settings)

      this.#writeSettings(settings)

      return {
        error: null,
        data: settings,
        filePath: path,
      }
    }
    catch (error) {
      return {
        error: (error as Error).message,
        data: settingsSchema.parse({}),
        filePath: path,
      }
    }
  }

  onUpdate(callback: (settings: SettingsSchema) => void) {
    this.#emitter.on('update', callback)
  }
}

export { Settings }
