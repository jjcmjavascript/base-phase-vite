class StatusZone {
  render ({ scene }) {
    const { width, height } = scene.game.canvas
    const currentWidth = width * 0.2
    const dropZoneOutline = scene.add.graphics()

    dropZoneOutline.lineStyle(1, 0xff69b4)
    dropZoneOutline.strokeRect(width * 0.8, 1, width - 2, height - 2)
  }
}

export default StatusZone
