import Phaser from 'phaser'
import CardFactory from '@classes/CardFactory'
import CardEffectFactory from '@classes/CardEffectFactory'
import getScreenSize from '@utils/getScreenSize'
import Zone from '@classes/CardsZone'
import DescriptionZone from '@classes/DescriptionZone'
import StatusZone from '@classes/StatusZone'

const ishio = CardFactory.getCardInstance({ type: 'creature', name: 'ishio' })
const rafaga = CardFactory.getCardInstance({ type: 'instantaneous', name: 'rafaga' })

const zone = new Zone({ getScreenSize })
const descriptionZone = new DescriptionZone({ getScreenSize })
const statusZone = new StatusZone({ getScreenSize })

const setCardInZone = ({
  gameObject,
  dropZone
}) => {
  gameObject.setTint()
  const { x, y, width, height } = dropZone.getData('zoneObject')
  gameObject.x = x + width / 2
  gameObject.y = y + height / 2
  // gameObject.disableInteractive()
}

const returnCardToOriginalPos = ({ gameObject }) => {
  gameObject.setTint()
  gameObject.x = gameObject.input.dragStartX
  gameObject.y = gameObject.input.dragStartY
}

export default class Game extends Phaser.Scene {
  constructor () {
    super('GameScene')
    this.angle = 2
    this.card = null
  }

  preload () {
    ishio.load({ scene: this })
    rafaga.load({ scene: this })
  }

  create () {
    const self = this
    zone.render({ scene: this })
    descriptionZone.render({ scene: this })
    statusZone.render({ scene: this })
    ishio.render({ scene: this, x: 100, y: 100, width: 78, height: 118 }).draggable({ scene: this })
    rafaga.render({ scene: this, x: 100, y: 100 * 2, width: 78, height: 118 }).draggable({ scene: this })

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
        returnCardToOriginalPos({ gameObject })
      }
    })

    this.input.on('drop', function (pointer, gameObject, dropZone) {
      if (!dropZone) return

      console.log(gameObject.getData('card').type)
      if (dropZone.getData('zoneObject').type.includes(gameObject.getData('card').type)) {
        setCardInZone({
          gameObject,
          dropZone
        })
      } else {
        returnCardToOriginalPos({ gameObject })
      }
    })
  }

  update () {

  }
}
