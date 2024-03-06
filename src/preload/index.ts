import process from 'node:process'
import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import type { IPCHandlers } from '@rootTypes/ipc'
import type { CustomAPI } from './api'

const doInvoke: CustomAPI['doInvoke'] = (channel, data) => {
  const validChannels: (keyof IPCHandlers)[] = ['get-settings', 'set-window-size', 'change-setting', 'get-themes']

  if (validChannels.includes(channel))
    return ipcRenderer.invoke(channel, data)
  return null
}

const api: CustomAPI = {
  doInvoke,
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  }
  catch (error) {
    console.error(error)
  }
}
else {
  // @ts-expect-error (define in dts)
  window.electron = electronAPI
  // @ts-expect-error (define in dts)
  window.api = api
}
