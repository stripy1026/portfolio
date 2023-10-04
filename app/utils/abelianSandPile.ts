export interface IAbelianSandpile {
  animate: (ctx: CanvasRenderingContext2D) => void;
}

export class AbelianSandpile implements IAbelianSandpile {
  private WIDTH: number;
  private HEIGHT: number;
  private i: number;
  private j: number;

  constructor(screenWidth: number, screenHeight: number) {
    this.WIDTH = screenWidth;
    this.HEIGHT = screenHeight;
    this.i = 0;
    this.j = 0;
  }

  animate(ctx: CanvasRenderingContext2D) {
    this.i = Math.floor(Math.random() * this.WIDTH);
    this.j = Math.floor(Math.random() * this.HEIGHT);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(this.i, this.j, 25, 25);
  }
}
