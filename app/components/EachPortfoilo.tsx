"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type EachPortfolioProps = {
  imageSrc: string;
  title: string;
  language: string;
  href: string;
};

export const EachPortfoilo = ({
  imageSrc,
  title,
  language,
  href,
}: EachPortfolioProps) => {
  // 개별 페이지 이동 버튼

  const [isDetail, setIsDetail] = useState(false);
  const animateItem = useScrollFadeIn();

  return (
    <div {...animateItem}>
      <button onClick={() => setIsDetail((prev) => !prev)}>
        {isDetail ? (
          <div className="w-[300px] h-[240px] sm:w-[400px] sm:h-[320px] flex flex-col items-center border-dashed border-2 border-rose-700 animate-flip">
            <span className="text-2xl font-bold mt-10 sm:mt-20">{title}</span>
            <span className="text-rose-600">{language}</span>
            <Link
              className="border-2 p-2 border-slate-600 text-rose-700 mt-20"
              href={href}
            >
              SEE MORE
            </Link>
          </div>
        ) : (
          <div className="w-[300px] h-[240px] sm:w-[400px] sm:h-[320px] relative">
            <Image src={imageSrc} alt={title} fill={true} />
          </div>
        )}
      </button>
    </div>
  );
};
