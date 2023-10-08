"use client";

import Link from "next/link";
import { BackgroundAnimation } from "./BackgroundAnimation";
import { useRef } from "react";
import { useClientWidthHeight } from "@/hooks/useClientWidthHeight";

export const Intro = () => {
  const mainRef = useRef<HTMLElement>(null);
  const { width, height } = useClientWidthHeight(mainRef);

  return (
    <main ref={mainRef} className="min-h-[800px] h-screen">
      <section className="relative">
        <BackgroundAnimation width={width} height={height} />
      </section>
      <div className="relative bottom-full">
        <section className="flex flex-col items-center">
          <h1 className="mt-20 mb-2 text-slate-400 font-semibold">
            랜딩 페이지 시뮬레이션
          </h1>
          <h1 className="my-1 text-5xl text-rose-600 font-bold">UNIVERSE:</h1>
          <h1 className="my-1 text-3xl text-rose-600 font-bold">
            Abelian Sandpile Model
          </h1>
          <h2 className="my-2 text-xs text-slate-400 font-semibold">
            졸업논문을 위해 공부했던 모델을 조금 변형해서 구현했습니다
          </h2>
        </section>
      </div>
      <div className="relative bottom-2/3">
        <section className="flex flex-col items-center">
          <h2 className="-mt-10 mb-2 text-4xl text-rose-700 font-extrabold">
            조인우
          </h2>
          <span className="text-xl text-slate-400 font-semibold">
            프론트엔드 개발자
          </span>
        </section>
      </div>
      <div className="relative bottom-1/2">
        <section className="flex flex-col items-center">
          <Link
            className="-mt-20 mb-10 p-5 text-rose-700 text-xl font-semibold border-2 border-slate-400"
            href="#about"
          >
            포트폴리오 확인
          </Link>
          <span className=" text-slate-400 font-semibold">
            저는, 모르는 게 많습니다
          </span>
          <span className=" text-slate-400 font-semibold">
            저는, 모든 것을 배울 준비가 되어 있습니다
          </span>
        </section>
      </div>
    </main>
  );
};
