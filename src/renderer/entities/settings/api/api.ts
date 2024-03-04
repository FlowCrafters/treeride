const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function getAppSettings() {
  await sleep(1000)
  const response = await window.api.doInvoke('get-settings')
  return response
}

export { getAppSettings }
