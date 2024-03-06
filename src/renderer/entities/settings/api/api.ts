import type { ChangeSettingPayload } from '@rootTypes/modules/settings'

async function getAppSettings() {
  const response = await window.api.doInvoke('get-settings')
  return response
}

async function changeSetting(payload: ChangeSettingPayload) {
  await window.api.doInvoke('change-setting', payload)
}

export { getAppSettings, changeSetting }
