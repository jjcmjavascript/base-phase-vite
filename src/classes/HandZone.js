class HandZone {
  render ({ scene }) {
    const { width, height } = scene.game.canvas
    const dropZoneOutline = scene.add.graphics()

    dropZoneOutline.lineStyle(1, 0xff69b4)
    dropZoneOutline.strokeRect(0, height * 0.7, width * 0.3 - 2, height * 0.3 - 2)
  }
}

export default HandZone
