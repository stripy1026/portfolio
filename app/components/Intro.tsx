"use client";

import Link from "next/link";
import { BackgroundAnimation } from "./BackgroundAnimation";
import { useRef } from "react";
import { useClientWidthHeight } from "@/hooks/useClientWidthHeight";

export const Intro = () => {
  const mainRef = useRef<HTMLElement>(null);
  const { width, height } = useClientWidthHeight(mainRef);

  return (
    <main className="w-full h-screen my-5 bg-slate-500" ref={mainRef}>
      <BackgroundAnimation width={width} height={height} />
      <section>
        <div>
          <h1>저는 아무것도 모릅니다</h1>
          <h1>그렇기에, 모든 것을 배울 준비가 되어 있습니다</h1>
        </div>
      </section>
      <section>
        <h2>조인우</h2>
        <h2>프론트엔드 개발자</h2>
      </section>
      <Link href="#about">포트폴리오 확인</Link>
    </main>
  );
};
