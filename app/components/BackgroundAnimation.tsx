import { useCanvas } from "@/hooks/useCanvas";

type BackgroundAnimationProps = {
  width: number;
  height: number;
};

export const BackgroundAnimation = ({
  width,
  height,
}: BackgroundAnimationProps) => {
  const canvasRef = useCanvas(width, height);

  return <canvas ref={canvasRef} />;
};
