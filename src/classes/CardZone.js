class CardZone {
  constructor ({
    cardZoneId,
    width,
    height,
    x,
    y,
    card = null,
    type = ['creature']
  }) {
    this.type = type
    this.cardZoneId = cardZoneId
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.card = card
  }

  setZone ({ scene }) {
    const phZone = scene.add
      .zone(this.x, this.y)
      .setRectangleDropZone(this.width, this.height)

    this.phZone = phZone
    phZone.setData({ zoneObject: this, quantityOn: 0 })

    return this
  }

  setZoneLines ({ scene }) {
    const dropZoneOutline = scene.add.graphics()
    dropZoneOutline.lineStyle(1, 0xff69b4)
    dropZoneOutline.strokeRect(
      this.x,
      this.y,
      this.width,
      this.height
    )

    return this
  }

  render ({ scene }) {
    this.setZone({ scene })
    this.setZoneLines({ scene })

    return this
  }
}

export default CardZone
