import Phaser from 'phaser'
import CardFactory from '@classes/CardFactory'

const hina = CardFactory.getCardInstance({ type: 'creature', name: 'hina' })

export default class Game extends Phaser.Scene {
  constructor () {
    super('GameScene')
    this.angle = 2
    this.card = null
  }

  preload () {
    this.load.image('cardOne', hina.imageUrl)
  }

  create () {
    this.card = this.add.image(200, 200, 'cardOne').setScale(0.5, 0.5)
    this.add.text(75, 0, [hina.name])
  }

  update () {

  }
}
