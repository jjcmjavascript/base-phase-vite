import Phaser from 'phaser'
import config from '@configs/phaser'
import GameScene from '@scenes/Game'

/* eslint-disable-next-line */
export default function execute () {
  const game = new Phaser.Game(Object.assign(config, { scene: [GameScene] }))
}
