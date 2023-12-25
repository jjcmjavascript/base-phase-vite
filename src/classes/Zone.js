class Zone {
  constructor ({ getScreenSize }) {
    this.creatures = []
    this.items = []
    this.deck = null
    this.hand = null
    this.resources = null
    this.resourcesPile = null
    this.usedResources = null
    this.discardPile = null
    this.phCreatureZone = null
    this.phItemZone = null

    this.screenWidth = null
    this.screenHeight = null
    this.zoneWidth = null
    this.zoneHeight = null
    this.cardHeight = null
    this.cardWidth = null
    this.x = 0
    this.y = 0
    this.getScreenSize = getScreenSize
  }

  setDimensions ({ scene }) {
    const textSize = this.getScreenSize.getScreenSizeInText()
    const { width, height } = scene.game.canvas
    const sizes = {
      xs: { cardHeight: 120, cardWidth: 80 },
      sm: { cardHeight: 120, cardWidth: 80 },
      md: { cardHeight: 120, cardWidth: 80 },
      lg: { cardHeight: 120, cardWidth: 80 }
    }

    this.screenWidth = width
    this.screenHeight = height
    this.zoneWidth = width * 0.5
    this.zoneHeight = sizes[textSize].cardHeight
    this.cardHeight = sizes[textSize].cardHeight
    this.cardWidth = sizes[textSize].cardWidth
    this.x = this.screenWidth * 0.31
    this.y = this.screenHeight * 0.6
  }

  render ({ scene }) {
    this.setDimensions({ scene })
    this.phCreatureZone = scene.add.zone(this.x, this.y, this.zoneWidth, this.zoneHeight).setRectangleDropZone(this.zoneWidth, this.cardHeight)
    this.phItemZone = scene.add.zone(this.x, this.y + this.cardHeight, this.zoneWidth, this.zoneHeight).setRectangleDropZone(this.zoneWidth, this.cardHeight)

    this.phCreatureZone.setData({ cards: 0 })
    this.phItemZone.setData({ cards: 0 })

    const dropZoneOutline = scene.add.graphics()
    dropZoneOutline.lineStyle(1, 0xff69b4)

    dropZoneOutline.strokeRect(this.phCreatureZone.x, this.phCreatureZone.y, this.cardWidth * 6, this.phCreatureZone.input.hitArea.height * 2)
    for (let i = 0; i < 6; i++) {
      dropZoneOutline.strokeRect(this.phCreatureZone.x + this.cardWidth * i, this.phCreatureZone.y, this.cardWidth, this.phCreatureZone.input.hitArea.height)
      dropZoneOutline.strokeRect(this.phItemZone.x + this.cardWidth * i, this.phItemZone.y, this.cardWidth, this.phItemZone.input.hitArea.height)
    }

    return this
  }
}

export default Zone
