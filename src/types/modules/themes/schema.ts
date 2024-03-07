import { z } from 'zod'

const themeSchema = z.object({
  author: z.string(),
  version: z.string(),
  name: z.string(),
  appearance: z.string(),
  colors: z.object({
    background: z.string(),
    backgroundSecondary: z.string(),
    text: z.string(),
    selection: z.string(),
    loader: z.string(),
  }),
})

type ThemeSchema = typeof themeSchema['_output']

export { themeSchema, type ThemeSchema }
