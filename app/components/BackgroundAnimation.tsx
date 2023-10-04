import { useCanvas } from "@/hooks/useCanvas";
import { abelianSandPile } from "@/utils/abelianSandPile";

type BackgroundAnimationProps = {
  width: number;
  height: number;
};

export const BackgroundAnimation = ({
  width,
  height,
}: BackgroundAnimationProps) => {
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx = abelianSandPile(ctx, width, height);
  };
  const canvasRef = useCanvas(width, height, draw);

  return <canvas ref={canvasRef} />;
};
