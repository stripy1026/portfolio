import { useCanvas } from "@/hooks/useCanvas";

type BackgroundAnimationProps = {
  width: number;
  height: number;
};

export const BackgroundAnimation = ({
  width,
  height,
}: BackgroundAnimationProps) => {
  const draw = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < width; ++i) {
      for (let j = 0; j < height; ++j) {
        ctx.fillStyle = `rgb(${Math.floor((i * 256) / width)}, ${Math.floor(
          (j * 256) / height
        )}, ${Math.floor((i * j * 256 * 4) / (width * height))})`;
        ctx.fillRect(i, j, 1, 1);
      }
    }
  };
  const canvasRef = useCanvas(width, height, draw);

  return <canvas ref={canvasRef} />;
};
