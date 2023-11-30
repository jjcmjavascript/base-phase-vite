import Creature from './Creature'
import creatureSchemes from '../utils/creatureSchemes'

class CardFactory {
  static getCardInstance ({ type, name }) {
    const methods = {
      creature: CardFactory.getCreatureInstance,
      instantaneo: CardFactory.getInstantaneoInstace
    }

    return methods[type](name)
  }

  static getCreatureInstance (name) {
    return new Creature(creatureSchemes[name])
  }
}

export default CardFactory
