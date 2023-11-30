import creatureEffectScheme from '@utils/creatureEffectScheme'
import instantaneoEffectScheme from '@utils/instantaneousEffectScheme'
import gearEffectScheme from '@utils/gearEffectScheme'
import supplyEffectScheme from '@utils/supplyEffectScheme'

class CardEffectFactory {
  getCardInstance ({ type, name }) {
    const methods = {
      creature: CardEffectFactory.getCreatureInstance,
      instantaneo: CardEffectFactory.getInstantaneoInstace,
      gear: CardEffectFactory.getGearInstance,
      supply: CardEffectFactory.getSupplyInstance
    }

    return methods[type](name)
  }

  getCreatureInstance (name) {
    return creatureEffectScheme(name)
  }

  getInstantaneoInstace (name) {
    return instantaneoEffectScheme(name)
  }

  getGearInstance (name) {
    return gearEffectScheme(name)
  }

  getSupplyInstance (name) {
    return supplyEffectScheme(name)
  }
}

export default CardEffectFactory
