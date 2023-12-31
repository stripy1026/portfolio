import { useCanvas } from "@/hooks/useCanvas";
import { AbelianSandpile, IAbelianSandpile } from "@/utils/abelianSandPile";

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
    sandpile.topple(ctx);
    if (!sandpile.isStable()) {
      sandpile.makeAvalanche(ctx);
    }
  };
  const canvasRef = useCanvas(width, height, animate);

  return <canvas ref={canvasRef} />;
};
