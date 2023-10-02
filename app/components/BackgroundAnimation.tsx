import { useRef } from "react";

export const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return <canvas ref={canvasRef} />;
};
