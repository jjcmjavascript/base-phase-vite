import Creature from '../Creature'

class Hina extends Creature {
  constructor ({ life, attack, generation, agression, cost, name, effect = null, imageUrl }) {
    super({ life, attack, generation, agression, cost, name, effect, imageUrl })
  }
}

export default Hina
