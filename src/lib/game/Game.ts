import Phaser from 'phaser';
import { Scene } from './Scene';

/* eslint-disable no-var */
declare global {
  var game: Game;
}

export class Game extends Phaser.Game {
  constructor() {
    super({
      scale: {
        mode: Phaser.Scale.FIT,
      },
      physics: {
        default: 'arcade',
        arcade: {
          debug: true,
        },
      },
      scene: Scene,
    });
    window.game = this;
  }
}
