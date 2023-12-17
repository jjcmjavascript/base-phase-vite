import Phaser from 'phaser'
import CardFactory from '@classes/CardFactory'
import CardEffectFactory from '@classes/CardEffectFactory'
import Zone from '@classes/Zone'

const hina = CardFactory.getCardInstance({ type: 'creature', name: 'hina' })
const zone = new Zone()

export default class Game extends Phaser.Scene {
  constructor () {
    super('GameScene')
    this.angle = 2
    this.card = null
  }

  preload () {
    hina.load({ scene: this })
  }

  create () {
    zone.render({ scene: this })
  }

  update () {

  }
}
