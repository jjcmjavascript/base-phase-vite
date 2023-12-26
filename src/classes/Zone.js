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
    this.phCreatureZones = []
    this.phItemZones = []

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
      xs: { cardHeight: 80, cardWidth: 60 },
      sm: { cardHeight: 80, cardWidth: 60 },
      md: { cardHeight: 120, cardWidth: 80 },
      lg: { cardHeight: 120, cardWidth: 80 }
    }

    this.screenWidth = width
    this.screenHeight = height
    this.zoneWidth = width * 0.5
    this.zoneHeight = sizes[textSize].cardHeight
    this.cardHeight = sizes[textSize].cardHeight
    this.cardWidth = sizes[textSize].cardWidth
    this.x = this.screenWidth * 0.3 + this.zoneWidth * 0.15
    this.y = this.screenHeight * 0.6
  }

  render ({ scene }) {
    this.setDimensions({ scene })
    const numCuadros = 6

    for (let i = 0; i < numCuadros; i++) {
      const phZone = scene.add
        .zone(
          this.x + this.cardWidth * i,
          this.y,
          this.cardWidth,
          this.cardHeight
        )
        .setRectangleDropZone(this.cardWidth, this.cardHeight)

      phZone.setData({ cards: 0, type: 'creature' })

      this.phCreatureZones.push(phZone)
    }

    for (let i = 0; i < numCuadros; i++) {
      const phZone = scene.add
        .zone(
          this.x + this.cardWidth * i,
          this.y + this.cardHeight + 6,
          this.cardWidth,
          this.cardHeight
        )
        .setRectangleDropZone(this.cardWidth, this.cardHeight)

      phZone.setData({ cards: 0, type: 'item' })

      this.phItemZones.push(phZone)
    }

    // Dibujar contornos para las zonas
    const dropZoneOutline = scene.add.graphics()

    dropZoneOutline.lineStyle(1, 0xff69b4)

    this.phCreatureZones.forEach((zone, index) => {
      dropZoneOutline.strokeRect(
        zone.x - this.cardWidth / 2 - 2,
        zone.y - this.cardHeight / 2 - 2,
        this.cardWidth,
        this.cardHeight
      )
    })

    this.phItemZones.forEach((zone, index) => {
      dropZoneOutline.strokeRect(
        zone.x - this.cardWidth / 2 - 2,
        zone.y - this.cardHeight / 2 - 2,
        this.cardWidth,
        this.cardHeight
      )
    })

    return this
  }
}

export default Zone
