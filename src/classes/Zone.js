class Zone {
  constructor () {
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
    this.x = 1280 * 0.05
    this.y = 780 / 2
    this.width = 1280 * 0.9
    this.height = 150
  }

  render ({ scene, x = this.x, y = this.y, width = this.width, height = this.height }) {
    this.phCreatureZone = scene.add.zone(x, y, width, height).setRectangleDropZone(width, height)
    this.phItemZone = scene.add.zone(x, y, width, height).setRectangleDropZone(width, height)

    this.phCreatureZone.setData({ cards: 0 })
    this.phItemZone.setData({ cards: 0 })

    const dropZoneOutline = scene.add.graphics()
    const widthPerCard = this.phCreatureZone.input.hitArea.width / 6

    dropZoneOutline.lineStyle(2, 0xff69b4)
    dropZoneOutline.strokeRect(this.phCreatureZone.x, this.phCreatureZone.y, widthPerCard, this.phCreatureZone.input.hitArea.height)
    dropZoneOutline.strokeRect(this.phCreatureZone.x + widthPerCard * 1, this.phCreatureZone.y, widthPerCard, this.phCreatureZone.input.hitArea.height)
    dropZoneOutline.strokeRect(this.phCreatureZone.x + widthPerCard * 2, this.phCreatureZone.y, widthPerCard, this.phCreatureZone.input.hitArea.height)
    dropZoneOutline.strokeRect(this.phCreatureZone.x + widthPerCard * 3, this.phCreatureZone.y, widthPerCard, this.phCreatureZone.input.hitArea.height)
    dropZoneOutline.strokeRect(this.phCreatureZone.x + widthPerCard * 4, this.phCreatureZone.y, widthPerCard, this.phCreatureZone.input.hitArea.height)
    dropZoneOutline.strokeRect(this.phCreatureZone.x + widthPerCard * 5, this.phCreatureZone.y, widthPerCard, this.phCreatureZone.input.hitArea.height)

    dropZoneOutline.lineStyle(2, 0xff69b4)
    dropZoneOutline.strokeRect(this.phItemZone.x, this.phItemZone.y + height, widthPerCard, this.phItemZone.input.hitArea.height)
    dropZoneOutline.strokeRect(this.phItemZone.x + widthPerCard * 1, this.phItemZone.y + height, widthPerCard, this.phItemZone.input.hitArea.height)
    dropZoneOutline.strokeRect(this.phItemZone.x + widthPerCard * 2, this.phItemZone.y + height, widthPerCard, this.phItemZone.input.hitArea.height)
    dropZoneOutline.strokeRect(this.phItemZone.x + widthPerCard * 3, this.phItemZone.y + height, widthPerCard, this.phItemZone.input.hitArea.height)
    dropZoneOutline.strokeRect(this.phItemZone.x + widthPerCard * 4, this.phItemZone.y + height, widthPerCard, this.phItemZone.input.hitArea.height)
    dropZoneOutline.strokeRect(this.phItemZone.x + widthPerCard * 5, this.phItemZone.y + height, widthPerCard, this.phItemZone.input.hitArea.height)

    return this
  }
}

export default Zone
