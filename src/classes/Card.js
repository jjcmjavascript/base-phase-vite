class Card {
  constructor ({ cost, name, text, effect = null, imageUrl, type = 'creature' }) {
    this.cost = cost
    this.name = name
    this.effect = effect
    this.imageUrl = imageUrl
    this.text = text
    this.phCard = null
    this.type = type

    this.x = 300
    this.y = 300
    this.scaleX = 1
    this.scaleY = 1
    this.width = 0
    this.height = 0
  }

  get identifier () {
    return `type:${this.type} name:${this.name}`
  }

  load ({ scene }) {
    scene.load.image(this.identifier, this.imageUrl)
    return this
  }

  setIteractive () {
    this.phCard.setInteractive()
    return this
  }

  render ({ scene, x = this.x, y = this.y, width = this.width, height = this.height }) {
    this.phCard = scene.add.image(x, y, this.identifier)
      .setDisplaySize(width, height)

    this.phCard.setData({ card: this })

    return this
  }

  setScale ({ scaleX = this.scaleX, scaleY = this.scaleY }) {
    this.phCard.setScale(scaleX, scaleY)
    return this
  }

  draggable ({ scene }) {
    scene.input.setDraggable(this.phCard)
    return this
  }
}

export default Card
