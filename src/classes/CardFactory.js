import Creature from '@classes/Creature'
import creatureSchemes from '@utils/creatureSchemes'
import Instantaneous from '@classes/Instantaneous'
import instantaneousSchemes from '@utils/instantaneousSchemes'

class CardFactory {
  static getCardInstance ({ type, name }) {
    const methods = {
      creature: CardFactory.getCreatureInstance,
      instantaneous: CardFactory.getInstantaneoInstace
    }

    return methods[type](name)
  }

  static getCreatureInstance (name) {
    return new Creature(creatureSchemes[name])
  }

  static getInstantaneoInstace (name) {
    return new Instantaneous(instantaneousSchemes[name])
  }
}

export default CardFactory
