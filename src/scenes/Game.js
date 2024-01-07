import Phaser from 'phaser'
import CardFactory from '@classes/CardFactory'
import getScreenSize from '@utils/getScreenSize'
import Zone from '@classes/CardsZone'
import DescriptionZone from '@classes/DescriptionZone'
import StatusZone from '@classes/StatusZone'
import HandZone from '@classes/HandZone'

const ishio = CardFactory.getCardInstance({ type: 'creature', name: 'ishio' })
const rafaga = CardFactory.getCardInstance({ type: 'instantaneous', name: 'rafaga' })

const zone = new Zone({ getScreenSize })
const descriptionZone = new DescriptionZone({ getScreenSize })
const statusZone = new StatusZone({ getScreenSize })
const handZone = new HandZone({ getScreenSize })

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
    handZone.render({ scene: this })

    ishio.render({ scene: this, x: 100, y: 100, width: 78, height: 118 }).draggable({ scene: this })
    rafaga.render({ scene: this, x: 100, y: 100 * 2, width: 78, height: 118 }).draggable({ scene: this })
  }

  update () {

  }
}
