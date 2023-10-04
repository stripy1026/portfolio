import { useEffect, useRef } from "react";

export const useCanvas = (
  canvasWidth: number,
  canvasHeight: number,
  draw: (ctx: CanvasRenderingContext2D) => void
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const setCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio ?? 1;

      if (canvas && ctx) {
        canvas.style.width = canvasWidth + "px";
        canvas.style.height = canvasHeight + "px";
        canvas.width = canvasWidth + devicePixelRatio;
        canvas.height = canvasHeight + devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
    };
    setCanvas();

    if (ctx) {
      draw(ctx);
    }
  }, [canvasWidth, canvasHeight, draw]);

  return canvasRef;
};
