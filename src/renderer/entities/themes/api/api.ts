async function getThemes() {
  return await window.api.doInvoke('get-themes')
}

export { getThemes }
