import Phaser from 'phaser'
import CardFactory from '@classes/CardFactory'
import CardEffectFactory from '@classes/CardEffectFactory'

const hina = CardFactory.getCardInstance({ type: 'creature', name: 'hina' })

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
    hina.render({ scene: this }).draggable({ scene: this })

    this.add.text(75, 0, [hina.name])
  }

  update () {

  }
}
