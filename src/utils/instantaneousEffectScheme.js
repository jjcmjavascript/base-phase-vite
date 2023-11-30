const defaultEffect = {
  name: 'default',
  code: 'default',
  description: '',
  effectParts: []
}

const getInstantaneousEffectScheme = (name) => {
  const schemes = {
    defaultEffect
  }

  return schemes[name] || schemes.defaultEffect
}

export default getInstantaneousEffectScheme
