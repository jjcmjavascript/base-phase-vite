import Phaser from 'phaser'
import CardOne from '@cards/card-1.jpg'
import { Hina } from '../classes/cards'

const creature = new Hina({
  life: 1,
  attack: 2,
  generation: 2,
  agression: 1,
  cost: 1,
  name: 'kk',
  imageUrl: CardOne
})

console.log(creature)
export default class Game extends Phaser.Scene {
  constructor () {
    super('GameScene')
    this.angle = 2
    this.card = null
  }

  preload () {
    this.load.image('cardOne', creature.imageUrl)
  }

  create () {
    this.card = this.add.image(200, 200, 'cardOne').setScale(0.5, 0.5)
    this.add.text(75, 0, [creature.name])
  }

  update () {

  }
}
