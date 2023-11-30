const defaultEffect = {
  name: 'default',
  code: 'default',
  description: '',
  effectParts: []
}

const getSupplyEffectScheme = (name) => {
  const schemes = {
    defaultEffect
  }

  return schemes[name] || schemes.defaultEffect
}

export default getSupplyEffectScheme
