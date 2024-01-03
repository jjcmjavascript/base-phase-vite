import Card from './Card'

class Instantaneous extends Card {
  constructor ({ text, cost, name, effect = null, imageUrl, type }) {
    super({ cost, name, effect, imageUrl, text, type })
  }
}

export default Instantaneous
