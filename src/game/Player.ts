import Phaser from 'phaser';

type Vector2 = Phaser.Math.Vector2;
type Body = Phaser.Physics.Arcade.Body;

// eslint-disable-next-line
var navigator = {};

const BLUE = 0x0000ff;

type Keys = {
  [key: string]: { isDown: number };
};

export class Player extends Phaser.GameObjects.Rectangle {
  public body: Body;

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
  }

  update(keys: Keys): void {
    const controlledMove = this.getControlledMove(keys);
    this.applyDrag(controlledMove);
    this.applyControlledMove(controlledMove);
  }

  inControl(): boolean {
    return this.body.speed <= this.maxSpeed;
  }

  applyDrag(controlledMove: Vector2): void {
    if (this.inControl()) {
      // If not moving, apply controlled drag
      if (controlledMove.length() === 0) {
        const drag = this.body.velocity
          .clone()
          .negate()
          .setLength(this.movSpeed);
        if (drag.length() < this.body.velocity.length()) {
          this.body.velocity.add(drag);
        } else {
          this.body.velocity.setLength(0);
        }
      }
    } else {
      // Apply uncontrolled drag
      this.body.setDamping(true);
      this.body.setDrag(0.1, NaN);
    }
  }

  getControlledMove({ up, down, left, right }: Keys): Vector2 {
    const result = new Phaser.Math.Vector2(
      right.isDown - left.isDown,
      down.isDown - up.isDown,
    ).setLength(this.movSpeed);

    return result;
  }

  applyControlledMove(controlledMove: Vector2): void {
    if (!this.inControl()) return;

    this.body.velocity.add(controlledMove);
    this.body.velocity.limit(this.maxSpeed - 1);

    if (controlledMove.x > 0) {
      this.facingRight = true;
    } else if (controlledMove.x < 0) {
      this.facingRight = false;
    }
  }
}
