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

  private sandbox: number[][];
  private unstableList: number[][];

  constructor(screenWidth: number, screenHeight: number) {
    this.WIDTH = screenWidth;
    this.HEIGHT = screenHeight;
    this.randomX = 0;
    this.randomY = 0;

    this.sandbox = Array.from(Array(this.WIDTH), () =>
      Array(this.HEIGHT).fill(0)
    );
    this.unstableList = [];
  }

  isStable() {
    return this.unstableList.length === 0;
  }

  topple(ctx: CanvasRenderingContext2D) {
    this.randomX = Math.floor((Math.random() * this.WIDTH) / 10);
    this.randomY = Math.floor((Math.random() * this.HEIGHT) / 10);
    this.sandbox[this.randomX][this.randomY] += 1;
    console.log(this.sandbox);
    ctx.fillStyle = `rgb(${this.sandbox[this.randomX][this.randomY] * 50}, ${
      this.sandbox[this.randomX][this.randomY] * 50
    }, ${this.sandbox[this.randomX][this.randomY] * 50})`;
    ctx.fillRect(this.randomX * 10, this.randomY * 10, 10, 10);
  }

  makeAvalanche() {}
}
