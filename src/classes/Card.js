class Card {
  constructor ({ cost, name, effect = null, imageUrl }) {
    this.cost = cost
    this.name = name
    this.effect = effect
    this.imageUrl = imageUrl
  }
}

export default Card
