"use client";

import { useEffect, useRef } from "react";

export const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
  }, []);

  return <canvas ref={canvasRef} />;
};
