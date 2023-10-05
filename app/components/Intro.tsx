"use client";

import Link from "next/link";
import { BackgroundAnimation } from "./BackgroundAnimation";
import { useRef } from "react";
import { useClientWidthHeight } from "@/hooks/useClientWidthHeight";

export const Intro = () => {
  const mainRef = useRef<HTMLElement>(null);
  const { width, height } = useClientWidthHeight(mainRef);

  return (
    <main ref={mainRef}>
      <section className="relative">
        <BackgroundAnimation width={width} height={height} />
      </section>
      <div className="relative bottom-full">
        <section className="flex flex-col items-center">
          <h1>랜딩 페이지 애니메이션</h1>
          <h1>Abelian Sandpile Model</h1>
          <h2>졸업논문을 위해 공부했던 모델을 조금 변형해서 구현했습니다</h2>
        </section>
        <section className="flex flex-col items-center">
          <h2>조인우</h2>
          <h2>프론트엔드 개발자</h2>
        </section>
        <section className="flex flex-col items-center">
          <h1>저는 아무것도 모릅니다</h1>
          <h1>그렇기에, 모든 것을 배울 준비가 되어 있습니다</h1>
          <Link href="#about">포트폴리오 확인</Link>
        </section>
      </div>
    </main>
  );
};
