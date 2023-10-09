"use client";

import Image from "next/image";
import { ScrollImage } from "./ScrollImage";
import { useState } from "react";

export const Detail = () => {
  const [isImage, setIsImage] = useState(true);
  return (
    <div>
      <div className="w-screen bg-black/20 flex justify-center">
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
        <div className="mt-10">
          <div className="flex justify-center xl:hidden">
            <ScrollImage />
          </div>
          <div className="flex justify-center max-[1279px]:hidden">
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
                alt="img2"
                fill={true}
              />
            </div>
            <div className="relative w-[400px] h-[320px]">
              <Image
                src="/transcendence/transcendence_3.png"
                alt="img3"
                fill={true}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black/20 p-10 flex flex-col items-center border-b-2">
          <p>프로젝트 시작 : 2023/01/15</p>
          <p>프로젝트 완료 : 2023/03/03</p>
          <p className="mb-5">
            42에서의 마지막 프로젝트이자, 42에서의 첫 웹 프로젝트.
          </p>
          <div className="responsive">
            <p>
              &nbsp;처음 팀이 결성될 당시 나는 C, C++ 만을 공부한 상태였고, C++
              로 채팅 서버를 구현하는 과제를 한 덕에 서버와 소켓 프로그래밍에
              대한 이해는 어느 정도 된 상태였지만, 클라이언트 쪽 지식은 전무했고
              당연히 자바스크립트, 웹 브라우저에 대한 지식도 없는 백지 상태였다.
            </p>
            <p>
              &nbsp;그래서 트센에 필요한 기술 스택을 쌓기 위해 자바스크립트 Deep
              Dive 를 빌려서 하루만에 다 읽고, 바로 타입스크립트와 리액트 공부에
              뛰어들어서 1주일 만에 공부를 끝내고, 첫 웹게임 토이프로젝트를
              완성했다.
            </p>
            <p>
              &nbsp;프로젝트를 진행하는 중에, 팀원과의 실력 격차가 나는 것을
              내가 못 견뎌해서 자괴감이 많이 들었다. 이로 인해 스트레스를 많이
              받았다. 여러 사람들과 팀 프로젝트를 진행하다 보면, 내가 더 실력이
              좋을 수도 있고, 내가 뒤떨어질 수도 있다. 내가 어리석은 생각을
              가지고 있었구나 하고 깨달았다. 부족한 점을 열심히 배우면 되지,
              자괴감을 느낄 필요는 없다는 생각이 들었다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
