import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync } from 'node:fs'
import { resolve } from 'node:path'

import { fork } from 'node:child_process'
import { cwd } from 'node:process'
import type { Extension, RunExtensionCommandPayload } from '@rootTypes/modules/extensions/types'
import { app } from 'electron'
import { extensionsSchema } from '@rootTypes/modules/extensions'
import { parseYaml } from 'src/main/utils/yaml'
import type { Logger } from '../logger/logger'
import type { MessageFromBackFront, MessagesFromBackFront } from './types'

class Extensions {
  #logger: Logger
  extensions: Extension[]
  runningCommand: RunExtensionCommandPayload | null
  loadedCommand: string | null
  #child: ReturnType<typeof fork>

  constructor(logger: Logger) {
    this.#logger = logger
    this.#pushBackFront()
    this.extensions = this.#preflightExtensions()
    this.runningCommand = null
    this.loadedCommand = null
    this.#child = this.#runBackFront()
  }

  #pushBackFront() {
    const backfrontFile = resolve(cwd(), 'backfront', 'backfront.js')
    const destination = resolve(app.getPath('userData'), 'backfront.js')
    if (existsSync(destination))
      unlinkSync(destination)
    copyFileSync(backfrontFile, destination)

    this.#logger.logger.debug('push backfront to userData directory')
  }

  #logBackFrontEvents(message: MessagesFromBackFront['log']['message']) {
    this.#logger.logger.debug(`message from backfront: ${message}`)
  }

  #runBackFront() {
    const backFront = fork(resolve(app.getPath('userData'), 'backfront.js'))

    backFront.on('message', (message: MessageFromBackFront) => {
      if (message.type === 'log')
        this.#logBackFrontEvents(message.payload.message)
    })

    this.#logger.logger.debug('run backfront')
    return backFront
  }

  #getExtensionsPath(): string {
    return `${app.getPath('userData')}/extensions`
  }

  #getExtensions(): Extension[] {
    const extensionsPath = this.#getExtensionsPath()
    const extensions: Extension[] = readdirSync(extensionsPath).map(extension => ({
      meta: extensionsSchema.parse(parseYaml(readFileSync(`${extensionsPath}/${extension}/extension.yml`, 'utf-8'))),
      jsPath: `${extensionsPath}/${extension}/commands`,
    }))

    return extensions
  }

  #preflightExtensions(): Extension[] {
    const extensionsPath = this.#getExtensionsPath()
    if (!existsSync(extensionsPath))
      mkdirSync(extensionsPath)

    this.#logger.logger.debug('preflight extensions')
    return this.#getExtensions()
  }

  #loadExtensionCommand(extension: Extension, command: string) {
    this.loadedCommand = readFileSync(resolve(extension.jsPath, `${command}.js`), 'utf8')
  }

  killExtensionCommand() {
    this.#child.kill()
    this.#child = this.#runBackFront()
    this.runningCommand = null
    this.#logger.logger.debug('kill extension command')
  }

  runExtensionCommand(payload: RunExtensionCommandPayload) {
    if (this.runningCommand)
      this.killExtensionCommand()

    const extension = this.extensions.find(extension => extension.meta.name === payload.extensionName)
    if (!extension)
      return

    this.#loadExtensionCommand(extension, payload.commandName)

    this.#child.send({
      type: 'run',
      payload: {
        code: this.loadedCommand,
      },
    })

    this.runningCommand = payload
    this.#logger.logger.debug('run extension command')
  }
}

export { Extensions }
