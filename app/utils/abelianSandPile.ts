export interface IAbelianSandpile {
  isStable: () => boolean;
  topple: (ctx: CanvasRenderingContext2D) => void;
  makeAvalanche: (ctx: CanvasRenderingContext2D) => void;
}

export class AbelianSandpile implements IAbelianSandpile {
  private WIDTH: number;
  private HEIGHT: number;
  private randomX: number;
  private randomY: number;
  private randomDistribute: number;

  private sandbox: number[][];
  private unstableList: number[][];

  constructor(screenWidth: number, screenHeight: number) {
    this.WIDTH = screenWidth;
    this.HEIGHT = screenHeight;
    this.randomX = 0;
    this.randomY = 0;
    this.randomDistribute = 0;

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
    ctx.fillStyle = `rgb(${level * 50}, ${level * 50}, ${level * 50})`;
    ctx.fillRect(posX * 10, posY * 10, 10, 10);
  }

  isStable() {
    return this.unstableList.length === 0;
  }

  topple(ctx: CanvasRenderingContext2D) {
    this.randomX = Math.floor((Math.random() * this.WIDTH) / 10);
    this.randomY = Math.floor((Math.random() * this.HEIGHT) / 10);

    if (!this.sandbox[this.randomX]) {
      return;
    }

    this.sandbox[this.randomX][this.randomY] += 1;

    this.drawLevel(
      ctx,
      this.randomX,
      this.randomY,
      this.sandbox[this.randomX][this.randomY]
    );

    if (this.sandbox[this.randomX][this.randomY] >= 4) {
      this.unstableList.push([this.randomX, this.randomY]);
    }
    console.log("topple");
  }

  makeAvalanche(ctx: CanvasRenderingContext2D) {
    this.randomDistribute = Math.floor(
      Math.random() * this.unstableList.length
    );
    const [topX, topY] = this.unstableList[this.randomDistribute];

    const dx = [topX + 1, topX - 1, topX, topX];
    const dy = [topY, topY, topY + 1, topY - 1];
    for (let i = 0; i < 4; ++i) {
      if (dx[i] < 0 || dx[i] >= this.randomX * 10) continue;
      if (dy[i] < 0 || dy[i] >= this.randomX * 10) continue;
      this.sandbox[dx[i]][dy[i]] += this.sandbox[topX][topY] / 4;
      this.drawLevel(ctx, dx[i], dy[i], this.sandbox[dx[i]][dy[i]]);
      if (this.sandbox[dx[i]][dy[i]] >= 4) {
        this.unstableList.push([dx[i], dy[i]]);
      }
    }
    this.sandbox[topX][topY] = 0;
    this.unstableList.splice(this.randomDistribute, 1);
    this.drawLevel(ctx, topX, topY, this.sandbox[topX][topY]);
    console.log("avalanche");
  }
}
