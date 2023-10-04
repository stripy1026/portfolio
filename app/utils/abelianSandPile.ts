export interface IAbelianSandpile {
  animate: (ctx: CanvasRenderingContext2D) => void;
}

export class AbelianSandpile implements IAbelianSandpile {
  private VELOCITY: number;
  private r: number;
  private g: number;
  private time: number;

  constructor() {
    this.VELOCITY = 1;
    this.r = 0;
    this.g = 0;
    this.time = 0;
  }

  animate(ctx: CanvasRenderingContext2D) {
    this.time > 255 ? (this.time = 0) : (this.time += this.VELOCITY);
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
        this.r = this.time + 10 * i;
        if (this.r > 255) {
          this.r -= 255;
        }
        this.g = this.time + 10 * j;
        if (this.g > 255) {
          this.g -= 255;
        }
        ctx.fillStyle = `rgb(${this.r}, ${this.g}, 0)`;
        ctx.fillRect(j * 25, i * 25, 25, 25);
      }
    }
  }
}
