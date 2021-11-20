import Phaser from 'phaser';
import { Player } from './Player';

export class Scene extends Phaser.Scene {
  public group: Phaser.Physics.Arcade.Group;
  public player;
  public o: Phaser.GameObjects.Rectangle;
  private keys;

  constructor(config: Phaser.Types.Scenes.SettingsConfig) {
    super(config);
  }

  create(): void {
    this.group = this.physics.add.group({
      collideWorldBounds: true,
      maxVelocityX: 1024,
      maxVelocityY: 1024,
    });
    this.player = new Player(this, 100, 100);

    this.o = this.add.rectangle(200, 100, 16, 64, 0xff0000);
    this.group.addMultiple([this.player, this.o]);
    this.physics.add.collider(this.group, this.group);

    const { W, A, S, D } = Phaser.Input.Keyboard.KeyCodes;
    this.keys = this.input.keyboard.addKeys({
      up: W,
      left: A,
      down: S,
      right: D,
    });

    globalThis.scene = this;
    globalThis.player = this.player;
    globalThis.o = this.o;
    (this.o.body as Phaser.Physics.Arcade.Body).setDamping(true);
    (this.o.body as Phaser.Physics.Arcade.Body).setDrag(0.2, NaN);
  }

  update(): void {
    this.player.update(this.keys);
  }
}
