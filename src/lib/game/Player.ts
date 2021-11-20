import Phaser, { Physics } from 'phaser';

const BLUE = 0x0000ff;

type Keys = {
  [key: string]: { isDown: number };
};

export class Player extends Phaser.GameObjects.Rectangle {
  public bod: Physics.Arcade.Body;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    public maxSpeed = 256,
    public movSpeed = 64,
    public facingRight = true,
  ) {
    super(scene, x, y, 32, 32, BLUE);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.bod = this.body as Physics.Arcade.Body;
  }

  update(keys: Keys): void {
    const controlledMove = this.getControlledMove(keys);
    this.applyDrag(controlledMove);
    this.applyControlledMove(controlledMove);
  }

  inControl(): boolean {
    return this.bod.speed <= this.maxSpeed;
  }

  applyDrag(controlledMove: Phaser.Math.Vector2): void {
    if (this.inControl()) {
      // If not moving, apply controlled drag
      if (controlledMove.length() === 0) {
        const drag = this.bod.velocity
          .clone()
          .negate()
          .setLength(this.movSpeed);
        if (drag.length() < this.bod.velocity.length()) {
          this.bod.velocity.add(drag);
        } else {
          this.bod.velocity.setLength(0);
        }
      }
    } else {
      // Apply uncontrolled drag
      this.bod.setDamping(true);
      this.bod.setDrag(0.1, NaN);
    }
  }

  getControlledMove({ up, down, left, right }: Keys): Phaser.Math.Vector2 {
    const result = new Phaser.Math.Vector2(
      right.isDown - left.isDown,
      down.isDown - up.isDown,
    ).setLength(this.movSpeed);

    return result;
  }

  applyControlledMove(controlledMove: Phaser.Math.Vector2): void {
    if (!this.inControl()) return;

    this.bod.velocity.add(controlledMove);
    this.bod.velocity.limit(this.maxSpeed - 1);

    if (controlledMove.x > 0) {
      this.facingRight = true;
    } else if (controlledMove.x < 0) {
      this.facingRight = false;
    }
  }
}
