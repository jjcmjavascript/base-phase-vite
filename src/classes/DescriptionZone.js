class DescriptionZone {
  render ({ scene }) {
    const { width, height } = scene.game.canvas
    const zone = scene.add.zone(width * 0.3, height, width, height).setRectangleDropZone(width * 0.3, height)
    const dropZoneOutline = scene.add.graphics()

    dropZoneOutline.lineStyle(1, 0xff69b4)
    dropZoneOutline.strokeRect(0, 0, zone.input.hitArea.width, zone.input.hitArea.height)
  }
}

export default DescriptionZone
