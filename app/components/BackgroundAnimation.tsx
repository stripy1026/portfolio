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
  const tmp: IAbelianSandpile = new AbelianSandpile();

  const animate = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, width, height);
    tmp.animate(ctx);
  };
  const canvasRef = useCanvas(width, height, animate);

  return <canvas ref={canvasRef} />;
};
