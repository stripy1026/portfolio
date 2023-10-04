export interface IAbelianSandpile {
  animate: (ctx: CanvasRenderingContext2D) => void;
}

export class AbelianSandpile implements IAbelianSandpile {
  private TIME: number;
  private rgb: number;

  constructor() {
    this.TIME = 1;
    this.rgb = 0;
  }

  animate(ctx: CanvasRenderingContext2D) {
    this.rgb += this.TIME;
    if (this.rgb > 256) {
      this.rgb = 0;
    }
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.fillStyle = `rgb(${Math.floor(this.rgb + 42.5 * i)}, ${Math.floor(
          this.rgb + 42.5 * j
        )}, 0)`;
        ctx.fillRect(j * 25, i * 25, 25, 25);
      }
    }
  }
}
