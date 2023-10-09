"use client";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export const DetailWak = () => {
  const [scrollNumber, setScrollNumber] = useState(0);
  return (
    <div>
      <div className="flex my-10 xl:hidden">
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
            <div className="relative w-[300px] h-[220px]">
              <Image src="/wakQuote/wakQuote_main.png" alt="img1" fill={true} />
            </div>
          )}
          {scrollNumber === 1 && (
            <div className="relative w-[300px] h-[220px]">
              <Image
                src="/wakQuote/wakQuote_ranking.png"
                alt="img2"
                fill={true}
              />
            </div>
          )}
          {scrollNumber === 2 && (
            <div className="relative w-[300px] h-[220px]">
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
          <Image src="/wakQuote/wakQuote_ranking.png" alt="img2" fill={true} />
        </div>
        <div className="relative w-[300px] h-[220px] mx-5">
          <Image src="/wakQuote/wakQuote_profile.png" alt="img3" fill={true} />
        </div>
      </div>
    </div>
  );
};
