type EnvType = 'boolean'

function checkEnvVar(envVar: string, type: EnvType, except: boolean): boolean {
  if (type === 'boolean')
    return (envVar === 'true') === except

  return false
}

export { checkEnvVar }
