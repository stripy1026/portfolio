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
          <p>저는 아무것도 모릅니다</p>
          <p>그렇기에, 모든 것을 배울 준비가 되어 있습니다</p>
        </div>
      </section>
      <section>
        <p>조인우</p>
        <p>프론트엔드 개발자</p>
      </section>
      <Link href="#about">포트폴리오 확인</Link>
    </main>
  );
};
