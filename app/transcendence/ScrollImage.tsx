"use client";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export const ScrollImage = () => {
  const [scrollNumber, setScrollNumber] = useState(0);
  return (
    <div className="flex">
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
          className="text-3xl p-2 bg-gray-300 text-orange-500"
          icon={faArrowLeft}
        />
      </button>
      <div>
        {scrollNumber === 0 && (
          <div className="relative w-[400px] h-[320px]">
            <Image
              src="/transcendence/transcendence_1.png"
              alt="img1"
              fill={true}
            />
          </div>
        )}
        {scrollNumber === 1 && (
          <div className="relative w-[400px] h-[320px]">
            <Image
              src="/transcendence/transcendence_2.png"
              alt="img1"
              fill={true}
            />
          </div>
        )}
        {scrollNumber === 2 && (
          <div className="relative w-[400px] h-[320px]">
            <Image
              src="/transcendence/transcendence_3.png"
              alt="img1"
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
          className="text-3xl p-2 bg-gray-300 text-orange-500"
          icon={faArrowRight}
        />
      </button>
    </div>
  );
};
