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
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
  };
  const canvasRef = useCanvas(width, height, animate);

  return <canvas ref={canvasRef} />;
};
