"use client";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { RegretWak } from "./RegretWak";

export const DetailWak = () => {
  const [scrollNumber, setScrollNumber] = useState(0);
  const [isImg, setIsImg] = useState(true);
  return (
    <div>
      <div className="xl:hidden my-5 flex justify-center">
        <button onClick={() => setIsImg(true)}>
          <span className="mr-10 underline">이미지</span>
        </button>
        <button onClick={() => setIsImg(false)}>
          <span className="underline">후회의 기록</span>
        </button>
      </div>
      {isImg ? (
        <div>
          <div className="flex mb-10 xl:hidden">
            <button
              className="flex items-end mx-1"
              onClick={() => {
                if (scrollNumber === 0) {
                  setScrollNumber(2);
                } else {
                  setScrollNumber((prev) => prev - 1);
                }
              }}
            >
              <FontAwesomeIcon
                className="text-3xl p-2 bg-gray-300 text-blue-700"
                icon={faArrowLeft}
              />
            </button>
            <div>
              {scrollNumber === 0 && (
                <div className="relative w-[300px] h-[220px] animate-flip">
                  <Image
                    src="/wakQuote/wakQuote_main.png"
                    alt="img1"
                    fill={true}
                  />
                </div>
              )}
              {scrollNumber === 1 && (
                <div className="relative w-[300px] h-[220px] animate-flip">
                  <Image
                    src="/wakQuote/wakQuote_ranking.png"
                    alt="img2"
                    fill={true}
                  />
                </div>
              )}
              {scrollNumber === 2 && (
                <div className="relative w-[300px] h-[220px] animate-flip">
                  <Image
                    src="/wakQuote/wakQuote_profile.png"
                    alt="img3"
                    fill={true}
                  />
                </div>
              )}
            </div>
            <button
              className="flex items-end mx-1"
              onClick={() => {
                if (scrollNumber === 2) {
                  setScrollNumber(0);
                } else {
                  setScrollNumber((prev) => prev + 1);
                }
              }}
            >
              <FontAwesomeIcon
                className="text-3xl p-2 bg-gray-300 text-blue-700"
                icon={faArrowRight}
              />
            </button>
          </div>
          <div className="max-[1279px]:hidden my-10 flex">
            <div className="relative w-[300px] h-[220px] mx-5">
              <Image src="/wakQuote/wakQuote_main.png" alt="img1" fill={true} />
            </div>
            <div className="relative w-[300px] h-[220px] mx-5">
              <Image
                src="/wakQuote/wakQuote_ranking.png"
                alt="img2"
                fill={true}
              />
            </div>
            <div className="relative w-[300px] h-[220px] mx-5">
              <Image
                src="/wakQuote/wakQuote_profile.png"
                alt="img3"
                fill={true}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="max-[1279px]:hidden my-10 flex">
            <div className="relative w-[300px] h-[220px] mx-5">
              <Image src="/wakQuote/wakQuote_main.png" alt="img1" fill={true} />
            </div>
            <div className="relative w-[300px] h-[220px] mx-5">
              <Image
                src="/wakQuote/wakQuote_ranking.png"
                alt="img2"
                fill={true}
              />
            </div>
            <div className="relative w-[300px] h-[220px] mx-5">
              <Image
                src="/wakQuote/wakQuote_profile.png"
                alt="img3"
                fill={true}
              />
            </div>
          </div>
          <div className="relative -left-10 mb-10  xl:hidden">
            <RegretWak />
          </div>
        </div>
      )}
    </div>
  );
};
