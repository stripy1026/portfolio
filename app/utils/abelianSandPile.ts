export interface IAbelianSandpile {
  isStable: () => boolean;
  topple: (ctx: CanvasRenderingContext2D) => void;
  makeAvalanche: () => void;
}

export class AbelianSandpile implements IAbelianSandpile {
  private WIDTH: number;
  private HEIGHT: number;
  private randomX: number;
  private randomY: number;

  constructor(screenWidth: number, screenHeight: number) {
    this.WIDTH = screenWidth;
    this.HEIGHT = screenHeight;
    this.randomX = 0;
    this.randomY = 0;
  }

  isStable() {
    return true;
  }

  topple(ctx: CanvasRenderingContext2D) {
    this.randomX = Math.floor(Math.random() * this.WIDTH);
    this.randomY = Math.floor(Math.random() * this.HEIGHT);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(this.randomX, this.randomY, 1, 1);
  }

  makeAvalanche() {}
}
