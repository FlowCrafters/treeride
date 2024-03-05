import type { ChangeSettingFn } from '@rootTypes/modules/settings'

async function getAppSettings() {
  const response = await window.api.doInvoke('get-settings')
  return response
}

const changeSetting: ChangeSettingFn = async (payload) => {
  await window.api.doInvoke('change-setting', payload)
}

export { getAppSettings, changeSetting }
