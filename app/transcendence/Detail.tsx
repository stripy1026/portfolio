"use client";

import Image from "next/image";
import { ScrollImage } from "./ScrollImage";
import { useState } from "react";

export const Detail = () => {
  const [isImage, setIsImage] = useState(true);
  return (
    <div>
      <div className="w-screen bg-black/20 flex justify-center mb-10">
        <button
          className="p-2 w-[150px] border-r-2 bg-black/30 text-orange-200"
          onClick={() => setIsImage(true)}
        >
          이미지
        </button>
        <button
          className="p-2 w-[150px] bg-black/40 text-orange-200"
          onClick={() => setIsImage(false)}
        >
          후회의 기록
        </button>
      </div>
      {isImage ? (
        <div>
          <div className="flex justify-center xl:hidden">
            <ScrollImage />
          </div>
          <div className="flex justify-center max-[1280px]:hidden">
            <div className="relative w-[400px] h-[320px]">
              <Image
                src="/transcendence/transcendence_1.png"
                alt="img1"
                fill={true}
              />
            </div>
            <div className="relative w-[400px] h-[320px]">
              <Image
                src="/transcendence/transcendence_2.png"
                alt="img1"
                fill={true}
              />
            </div>
            <div className="relative w-[400px] h-[320px]">
              <Image
                src="/transcendence/transcendence_3.png"
                alt="img1"
                fill={true}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>후회의 기록</div>
      )}
    </div>
  );
};
