class Card {
  constructor ({ cost, name, effect = null, imageUrl }) {
    this.cost = cost
    this.name = name
    this.effect = effect
    this.imageUrl = imageUrl
    this.sceneCard = null
  }

  load ({ scene }) {
    scene.load.image(this.name, this.imageUrl)
    return this
  }

  render ({ scene, x = 300, y = 300, scaleX = 0.5, scaleY = 0.5 }) {
    this.sceneCard = scene.add.image(x, y, this.name).setScale(scaleX, scaleY).setInteractive()
    return this
  }

  draggable ({ scene }) {
    scene.input.setDraggable(this.sceneCard)
    return this
  }
}

export default Card
