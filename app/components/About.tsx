import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faBook,
  faGraduationCap,
  faHeartCirclePlus,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import { calculateDayPassed } from "@/utils/calculateDayPassed";

const SVG_SIZE = 72;
const C_DAY = new Date(2021, 4, 3);
const CPP_DAY = new Date(2022, 3, 7);
const JS_DAY = new Date(2023, 1, 7);
const REACT_DAY = new Date(2023, 1, 21);
const NEXT_DAY = new Date(2023, 5, 5);
const RN_DAY = new Date(2023, 8, 26);

export const About = () => {
  const dayOfC = calculateDayPassed(C_DAY);

  return (
    <main id="about" className="responsive min-h-[2000px]">
      <div className="m-20 flex justify-center">
        <span className="text-rose-700 font-bold text-5xl underline">
          ABOUT
        </span>
      </div>
      <section className="flex w-full justify-around min-h-[400px]">
        <div className="p-2 w-5/12 border-2 rounded-xl flex flex-col items-center">
          <div id="pentagon" className="mt-10">
            <div className="text-7xl m-10">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className="text-l m-2 mt-20 flex">
            <FontAwesomeIcon className="mx-2 mt-1" icon={faCalendar} />
            <div>
              <span>1995.10.26</span>
            </div>
          </div>
          <div className="text-l m-2 flex">
            <FontAwesomeIcon className="mx-2 mt-1" icon={faGraduationCap} />
            <div>
              <span className="mr-1">인하대학교</span>
              <span className="max-[720px]:block">물리학과</span>
            </div>
          </div>
        </div>
        <div className="p-2 w-5/12 border-2 rounded-xl flex flex-col items-center">
          <div id="pentagon" className="mt-10">
            <div className="text-7xl m-10">
              <FontAwesomeIcon className="ml-2" icon={faBoltLightning} />
            </div>
          </div>
          <div className="text-l m-2 mt-20 flex">
            <FontAwesomeIcon className="mx-2 mt-1" icon={faBook} />
            <div>
              <span className="mr-1">배움의 즐거움,</span>
              <span className="max-[720px]:block">무한한 호기심</span>
            </div>
          </div>
          <div className="text-l m-2 flex">
            <FontAwesomeIcon className="mx-2 mt-1" icon={faHeartCirclePlus} />
            <div>
              <span className="mr-1">상대방을 존중,</span>
              <span className="max-[720px]:block">무한한 이해심</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col m-10">
        <div className="flex">
          <Image
            className="m-4"
            src="C.svg"
            alt="C"
            width={SVG_SIZE}
            height={SVG_SIZE}
          />
          <Image
            className="m-4"
            src="C++.svg"
            alt="C++"
            width={SVG_SIZE}
            height={SVG_SIZE}
          />
          <span>{dayOfC}일</span>
        </div>
        <div className="flex">
          <Image
            className="m-4"
            src="html.svg"
            alt="html"
            width={SVG_SIZE}
            height={SVG_SIZE}
          />
          <Image
            className="m-4"
            src="css.svg"
            alt="css"
            width={SVG_SIZE}
            height={SVG_SIZE}
          />
        </div>
        <div className="flex">
          <Image
            className="m-4"
            src="javascript.svg"
            alt="javascript"
            width={SVG_SIZE}
            height={SVG_SIZE}
          />
          <Image
            className="m-4"
            src="typescript.svg"
            alt="typescript"
            width={SVG_SIZE}
            height={SVG_SIZE}
          />
        </div>
        <div className="flex">
          <Image
            className="m-4"
            src="react.svg"
            alt="react"
            width={SVG_SIZE}
            height={SVG_SIZE}
          />
          <Image
            className="m-4"
            src="nextjs.svg"
            alt="nextjs"
            width={SVG_SIZE}
            height={SVG_SIZE}
          />
          <Image
            className="m-4"
            src="react-native.svg"
            alt="react-native"
            width={SVG_SIZE}
            height={SVG_SIZE}
          />
        </div>
      </section>
      <section>
        <p>
          <a
            target="_blank"
            href="https://42seoul.kr/seoul42/main/view"
            rel="noreferrer"
            className="no-underline hover:underline font-bold text-amber-300"
          >
            42서울
          </a>
          에서 2년동안 C와 C++을 학습했습니다. 물리학을 공부하던 입장에서는,
          바로 실용적인 기술들을 공부하기보다는 C를 통해 컴퓨터 구조에 대해 보다
          근본적으로 파악할 수 있어 매우 재미있었습니다.
        </p>
        <p>
          42서울에서 여러 과제들을 풀며 얻은 기본적인 CS 지식을 통해, 기본기를
          튼튼하게 다진 뒤 웹 프론트엔드를 구현하기 위한 기술들을 쌓았습니다.
          결과물이 바로 눈에 보인다는 것이 가장 큰 재미와 성취감으로 다가와서,
          웹 프론트엔드로 진로를 결심했습니다. React Native 로 핸드폰
          어플리케이션을 개발하는 것도 비슷한 이유로 매우 재미있었습니다.
        </p>
      </section>
    </main>
  );
};
