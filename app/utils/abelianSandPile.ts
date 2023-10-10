const TOPPLE_SIZE = 1;
const MINIMUM_TOPPLE_VELOCITY = 10;
const TOPPLE_WEIGHT = 1;
const CRITICAL_LEVEL = 4;

export interface IAbelianSandpile {
  isStable: () => boolean;
  getStackSize: () => number;
  isStackFull: () => boolean;
  topple: (ctx: CanvasRenderingContext2D) => void;
  makeAvalanche: (ctx: CanvasRenderingContext2D) => void;
}

export class AbelianSandpile implements IAbelianSandpile {
  private WIDTH: number;
  private HEIGHT: number;

  private MAXIMUM_EXPLODE_RANGE: number;
  private INITIAL_TOPPLE_VELOCITY: number;
  private BRIGHT_RATIO: number;
  private BURST_RATIO: number;

  private MAX_STACK_SIZE: number;
  private randomX: number;
  private randomY: number;
  private randomDistribute: number;

  private sandbox: number[][];
  private unstableList: number[][];

  private toppleVelocity: number;

  constructor(screenWidth: number, screenHeight: number) {
    this.WIDTH = screenWidth;
    this.HEIGHT = screenHeight;
    this.MAX_STACK_SIZE = this.WIDTH * this.HEIGHT;

    this.MAXIMUM_EXPLODE_RANGE = this.WIDTH < 640 ? 2 : 4;
    this.INITIAL_TOPPLE_VELOCITY = this.WIDTH < 640 ? 400 : 1000;
    this.BRIGHT_RATIO = this.WIDTH < 640 ? 8 : 1;
    this.BURST_RATIO = this.WIDTH < 640 ? 1 : 8;

    this.randomX = 0;
    this.randomY = 0;
    this.randomDistribute = 0;

    this.toppleVelocity = this.INITIAL_TOPPLE_VELOCITY;

    this.sandbox = Array.from(Array(this.WIDTH), () =>
      Array(this.HEIGHT).fill(0)
    );
    this.unstableList = [];
  }

  private drawLevel(
    ctx: CanvasRenderingContext2D,
    posX: number,
    posY: number,
    level: number
  ) {
    if (!ctx) return;
    if (level < 0) {
      ctx.fillStyle = "rgb(0, 0, 0)";
    } else {
      ctx.fillStyle = `rgb(${level * this.BRIGHT_RATIO}, ${
        level * this.BRIGHT_RATIO
      }, ${level * this.BRIGHT_RATIO})`;
    }
    ctx.fillRect(
      posX * TOPPLE_SIZE,
      posY * TOPPLE_SIZE,
      TOPPLE_SIZE,
      TOPPLE_SIZE
    );
  }

  getStackSize() {
    return this.unstableList.length;
  }

  isStackFull() {
    return this.unstableList.length > this.MAX_STACK_SIZE;
  }

  isStable() {
    return this.unstableList.length === 0;
  }

  topple(ctx: CanvasRenderingContext2D) {
    if (this.toppleVelocity > MINIMUM_TOPPLE_VELOCITY) {
      this.toppleVelocity -= 1;
    }
    for (let i = 0; i < this.toppleVelocity; ++i) {
      this.randomX = Math.floor((Math.random() * this.WIDTH) / TOPPLE_SIZE);
      this.randomY = Math.floor((Math.random() * this.HEIGHT) / TOPPLE_SIZE);

      if (!this.sandbox[this.randomX]) {
        return;
      }

      this.sandbox[this.randomX][this.randomY] += TOPPLE_WEIGHT;

      this.drawLevel(
        ctx,
        this.randomX,
        this.randomY,
        this.sandbox[this.randomX][this.randomY]
      );

      if (
        !this.isStackFull() &&
        this.sandbox[this.randomX][this.randomY] >= CRITICAL_LEVEL
      ) {
        this.unstableList.push([this.randomX, this.randomY]);
      }
    }
  }

  makeAvalanche(ctx: CanvasRenderingContext2D) {
    this.randomDistribute = Math.floor(
      Math.random() * this.unstableList.length
    );
    const [topX, topY] = this.unstableList[this.randomDistribute];

    for (
      let explodeRange = 1;
      explodeRange < this.MAXIMUM_EXPLODE_RANGE;
      ++explodeRange
    ) {
      const dx = [
        topX + explodeRange,
        topX - explodeRange,
        topX,
        topX,
        topX + explodeRange,
        topX + explodeRange,
        topX - explodeRange,
        topX - explodeRange,
      ];
      const dy = [
        topY,
        topY,
        topY + explodeRange,
        topY - explodeRange,
        topY + explodeRange,
        topY - explodeRange,
        topY + explodeRange,
        topY - explodeRange,
      ];
      for (let i = 0; i < 8; ++i) {
        if (dx[i] < 0 || dx[i] >= this.WIDTH * TOPPLE_SIZE) continue;
        if (dy[i] < 0 || dy[i] >= this.HEIGHT * TOPPLE_SIZE) continue;
        if (!this.sandbox[dx[i]]) {
          return;
        }
        this.sandbox[dx[i]][dy[i]] += CRITICAL_LEVEL * this.BURST_RATIO;
        this.drawLevel(ctx, dx[i], dy[i], this.sandbox[dx[i]][dy[i]]);
        if (
          !this.isStackFull() &&
          this.sandbox[dx[i]][dy[i]] >= CRITICAL_LEVEL
        ) {
          this.unstableList.push([dx[i], dy[i]]);
        }
      }
    }
    this.sandbox[topX][topY] -=
      CRITICAL_LEVEL * this.MAXIMUM_EXPLODE_RANGE * this.BURST_RATIO * 16;
    this.unstableList.splice(this.randomDistribute, 1);
    this.drawLevel(ctx, topX, topY, this.sandbox[topX][topY]);
  }
}
