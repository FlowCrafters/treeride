import { z } from 'zod'

const commandSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  mode: z.enum(['view']),
})

const extensionsSchema = z.object({
  name: z.string(),
  version: z.string(),
  title: z.string(),
  description: z.string(),
  commands: z.array(commandSchema),
})

type ExtensionsSchema = typeof extensionsSchema._output

export { extensionsSchema, type ExtensionsSchema }
