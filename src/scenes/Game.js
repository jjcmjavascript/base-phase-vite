import Phaser from 'phaser'
import CardFactory from '@classes/CardFactory'
import CardEffectFactory from '@classes/CardEffectFactory'
import getScreenSize from '@utils/getScreenSize'
import Zone from '@classes/Zone'
import DescriptionZone from '@classes/DescriptionZone'
import StatusZone from '@classes/StatusZone'

const hina = CardFactory.getCardInstance({ type: 'creature', name: 'hina' })
const zone = new Zone({ getScreenSize })
const descriptionZone = new DescriptionZone({ getScreenSize })
const statusZone = new StatusZone({ getScreenSize })
export default class Game extends Phaser.Scene {
  constructor () {
    super('GameScene')
    this.angle = 2
    this.card = null
  }

  backToOriginalPosition (gameObject) {
    gameObject.x = gameObject.input.dragStartX
    gameObject.y = gameObject.input.dragStartY
  }

  preload () {
    hina.load({ scene: this })
  }

  create () {
    const self = this
    zone.render({ scene: this })
    descriptionZone.render({ scene: this })
    statusZone.render({ scene: this })
    hina.render({ scene: this, x: 100, y: 100, width: 78, height: 118 }).draggable({ scene: this })
    hina.render({ scene: this, x: 100, y: 100, width: 78, height: 118 }).draggable({ scene: this })

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX
      gameObject.y = dragY
    })

    this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff69b4)
      self.children.bringToTop(gameObject)
    })

    this.input.on('dragend', function (pointer, gameObject, dropped) {
      if (!dropped) {
        self.backToOriginalPosition(gameObject)
      }
    })

    this.input.on('drop', function (pointer, gameObject, dropZone) {
      if (!dropZone) return

      if (
        dropZone.getData('zoneObject').type === gameObject.getData('card').type) {
        gameObject.setTint()
        const { x, y, width, height } = dropZone.getData('zoneObject')
        console.log('x', x, 'y', y, dropZone.getData('zoneObject'))
        gameObject.x = x + width / 2
        gameObject.y = y + height / 2
        // gameObject.disableInteractive()
      } else {
        self.backToOriginalPosition(gameObject)
      }
    })
  }

  update () {

  }
}
