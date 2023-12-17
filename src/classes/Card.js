class Card {
  constructor ({ cost, name, effect = null, imageUrl }) {
    this.cost = cost
    this.name = name
    this.effect = effect
    this.imageUrl = imageUrl
    this.phCard = null
    this.x = 300
    this.y = 300
    this.scaleX = 0.5
    this.scaleY = 0.5
  }

  load ({ scene }) {
    scene.load.image(this.name, this.imageUrl)
    return this
  }

  render ({ scene, x = this.x, y = this.y, scaleX = this.scaleX, scaleY = this.scaleY }) {
    this.phCard = scene.add.image(x, y, this.name).setScale(scaleX, scaleY).setInteractive()
    return this
  }

  draggable ({ scene }) {
    scene.input.setDraggable(this.phCard)
    return this
  }
}

export default Card
