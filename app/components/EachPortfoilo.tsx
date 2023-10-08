"use client";

import Image from "next/image";
import { useState } from "react";

type EachPortfolioProps = {
  imageSrc: string;
  title: string;
  language: string;
};

export const EachPortfoilo = ({
  imageSrc,
  title,
  language,
}: EachPortfolioProps) => {
  // 개별 페이지 이동 버튼
  const IMAGE_WIDTH = 400;
  const IMAGE_HEIGHT = (IMAGE_WIDTH * 3) / 4;

  const [isDetail, setIsDetail] = useState(false);

  return (
    <button onClick={() => setIsDetail((prev) => !prev)}>
      {isDetail ? (
        <div className="w-[400px] h-[318px] flex flex-col items-center border-dashed border-2 border-rose-700">
          <span className="text-2xl font-bold mt-20">{title}</span>
          <span className="text-rose-600">{language}</span>
          <button className="border-2 p-2 border-slate-600 text-rose-700 mt-20">
            SEE MORE
          </button>
        </div>
      ) : (
        <Image
          src={imageSrc}
          alt={title}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
        />
      )}
    </button>
  );
};
