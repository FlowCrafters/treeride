import type { ExtensionsSchema } from './schema'

interface Extension {
  meta: ExtensionsSchema
  jsPath: string
}

interface RunExtensionCommandPayload {
  extensionName: string
  commandName: string
}

interface ChildVMIPCHandlers {
  run: { code: string }
}

interface ChildVMIPCCommands {
  command: keyof ChildVMIPCHandlers
  payload: ChildVMIPCHandlers[keyof ChildVMIPCHandlers]
}

export { type Extension, type RunExtensionCommandPayload, type ChildVMIPCCommands }
