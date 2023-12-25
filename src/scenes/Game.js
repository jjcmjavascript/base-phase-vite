import Phaser from 'phaser'
import CardFactory from '@classes/CardFactory'
import CardEffectFactory from '@classes/CardEffectFactory'
import getScreenSize from '@utils/getScreenSize'
import Zone from '@classes/Zone'
import DescriptionZone from '@classes/DescriptionZone'

const hina = CardFactory.getCardInstance({ type: 'creature', name: 'hina' })
const zone = new Zone({ getScreenSize })
const descriptionZone = new DescriptionZone({ getScreenSize })

export default class Game extends Phaser.Scene {
  constructor () {
    super('GameScene')
    this.angle = 2
    this.card = null
  }

  preload () {
    hina.load({ scene: this })
  }

  create () {}

  update () {
    zone.render({ scene: this })
    descriptionZone.render({ scene: this })
  }
}
