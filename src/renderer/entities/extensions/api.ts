import type { RunExtensionCommandPayload } from '@rootTypes/modules/extensions/types'

async function getExtensions() {
  const response = await window.api.doInvoke('get-extensions')
  return response
}

async function runExtensionCommand(payload: RunExtensionCommandPayload) {
  const response = await window.api.doInvoke('run-extension-command', payload)
  return response
}

async function killExtensionCommand() {
  const response = await window.api.doInvoke('kill-extension-command')
  return response
}

export { getExtensions, runExtensionCommand, killExtensionCommand }
