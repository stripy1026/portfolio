export const abelianSandPile = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      ctx.fillStyle = `rgb(${Math.floor((i * 256) / width)}, ${Math.floor(
        (j * 256) / height
      )}, ${Math.floor((i * j * 256 * 4) / (width * height))})`;
      ctx.fillRect(i, j, 1, 1);
    }
  }
  return ctx;
};
