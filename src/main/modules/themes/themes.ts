import { existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs'
import { app } from 'electron'
import { parseYaml } from 'src/main/utils/yaml'
import { type ThemeSchema, themeSchema } from '@rootTypes/modules/themes'
import type { Logger } from '../logger/logger'

class Themes {
  #logger: Logger
  themes: ThemeSchema[]

  constructor(logger: Logger) {
    this.#logger = logger
    this.themes = this.#preflightThemes()
  }

  #getThemesPath(): string {
    return `${app.getPath('userData')}/themes`
  }

  #readTheme(themeContent: string): ThemeSchema {
    const parsed = parseYaml(themeContent)
    const result = themeSchema.parse(parsed)
    return result
  }

  #preflightThemes() {
    const path = this.#getThemesPath()
    if (!existsSync(path))
      mkdirSync(path)

    this.#logger.logger.debug('preflight themes')
    const themes = readdirSync(path).map(filePath => readFileSync(`${path}/${filePath}`, 'utf-8')).map(this.#readTheme)
    return themes
  }
}

export { Themes }
