import CardZone from '@classes/CardZone'
class Zone {
  constructor ({ getScreenSize }) {
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
    this.x = this.screenWidth * 0.26 + this.zoneWidth * 0.2
    this.y = this.screenHeight * 0.6
  }

  render ({ scene }) {
    this.setDimensions({ scene })

    const mainCardZones = new Array(6).fill(null).map((_, index) => new CardZone({
      cardZoneId: index,
      width: this.cardWidth,
      height: this.cardHeight,
      x: this.x + this.cardWidth * index,
      y: this.y,
      card: null
    }))

    const secondaryCardZones = new Array(6).fill(null).map((_, index) => new CardZone({
      cardZoneId: index,
      width: this.cardWidth,
      height: this.cardHeight,
      x: this.x + this.cardWidth * index,
      y: this.y + this.cardHeight + 5,
      card: null,
      type: ['instantaneous', 'weapon', 'consumable']
    }))

    mainCardZones.forEach(zone => zone.render({ scene }))

    secondaryCardZones.forEach(zone => zone.render({ scene }))

    return this
  }
}

export default Zone
