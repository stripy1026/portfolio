import { useCanvas } from "@/hooks/useCanvas";
import { AbelianSandpile, IAbelianSandpile } from "@/utils/AbelianSandpile";

type BackgroundAnimationProps = {
  width: number;
  height: number;
};

export const BackgroundAnimation = ({
  width,
  height,
}: BackgroundAnimationProps) => {
  const sandpile: IAbelianSandpile = new AbelianSandpile(width, height);

  const animate = (ctx: CanvasRenderingContext2D) => {
    // ctx.clearRect(0, 0, width, height);
    sandpile.topple(ctx);
  };
  const canvasRef = useCanvas(width, height, animate);

  return <canvas ref={canvasRef} />;
};
