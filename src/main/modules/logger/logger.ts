import pino from 'pino'

class Logger {
  logger: ReturnType<typeof pino>
  constructor() {
    this.logger = pino({
      level: 'debug',
    })
  }

  public log(message: string) {
    this.logger.info(message)
  }
}

export { Logger }
