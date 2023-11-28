import Card from './Card'

class Creature extends Card {
  constructor ({ life, attack, generation, agression, cost, name, effect = null, imageUrl }) {
    super({ cost, name, effect, imageUrl })
    this.life = life
    this.attack = attack
    this.generation = generation
    this.agression = agression
  }
}

export default Creature
