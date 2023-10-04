import { useCanvas } from "@/hooks/useCanvas";

type BackgroundAnimationProps = {
  width: number;
  height: number;
};

export const BackgroundAnimation = ({
  width,
  height,
}: BackgroundAnimationProps) => {
  const animate = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "rgb(31, 31, 36)";
    ctx.fillRect(0, 0, width, height);
  };
  const canvasRef = useCanvas(width, height, animate);

  return <canvas ref={canvasRef} />;
};
