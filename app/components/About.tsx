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
const SVG_SMALL_SIZE = 40;
const C_DAY = new Date(2021, 4, 3);
const CPP_DAY = new Date(2022, 3, 7);
const HTML_DAY = new Date(2022, 12, 28);
const CSS_DAY = new Date(2022, 12, 29);
const JS_DAY = new Date(2023, 1, 7);
const TS_DAY = new Date(2023, 1, 16);
const REACT_DAY = new Date(2023, 1, 21);
const NEXT_DAY = new Date(2023, 5, 5);
const RN_DAY = new Date(2023, 8, 26);
const DAYS = [
  { day: calculateDayPassed(C_DAY), name: "C" },
  { day: calculateDayPassed(CPP_DAY), name: "C++" },
  { day: calculateDayPassed(HTML_DAY), name: "HTML" },
  { day: calculateDayPassed(CSS_DAY), name: "CSS" },
  { day: calculateDayPassed(JS_DAY), name: "Javascript" },
  { day: calculateDayPassed(TS_DAY), name: "Typescript" },
  { day: calculateDayPassed(REACT_DAY), name: "React.js" },
  { day: calculateDayPassed(NEXT_DAY), name: "Next.js" },
  { day: calculateDayPassed(RN_DAY), name: "React Native" },
];

export const About = () => {
  return (
    <main id="about" className="responsive min-h-[1450px]">
      <div className="m-20 flex justify-center">
        <span className="text-rose-700 font-bold text-5xl underline">
          ABOUT
        </span>
      </div>
      <section className="flex w-full justify-around min-h-[400px] max-[720px]:min-h-[200px]">
        <div className="p-2 w-5/12 border-2 rounded-xl flex flex-col items-center">
          <div id="pentagon" className="mt-10 max-[720px]:mt-5">
            <div className="text-7xl m-10">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className="text-l m-2 mt-20 max-[720px]:mt-10 flex">
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
          <div id="pentagon" className="mt-10 max-[720px]:mt-5">
            <div className="text-7xl m-10">
              <FontAwesomeIcon className="ml-2" icon={faBoltLightning} />
            </div>
          </div>
          <div className="text-l m-2 mt-20 max-[720px]:mt-10 flex">
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
      <section className="flex min-[720px]:hidden mt-5 mx-10 justify-around">
        <Image
          className="m-1"
          src="C.svg"
          alt="C"
          width={SVG_SMALL_SIZE}
          height={SVG_SMALL_SIZE}
        />
        <Image
          className="m-1"
          src="C++.svg"
          alt="C++"
          width={SVG_SMALL_SIZE}
          height={SVG_SMALL_SIZE}
        />
        <Image
          className="m-1"
          src="html.svg"
          alt="html"
          width={SVG_SMALL_SIZE}
          height={SVG_SMALL_SIZE}
        />
        <Image
          className="m-1"
          src="css.svg"
          alt="css"
          width={SVG_SMALL_SIZE}
          height={SVG_SMALL_SIZE}
        />
        <Image
          className="m-1"
          src="javascript.svg"
          alt="javascript"
          width={SVG_SMALL_SIZE}
          height={SVG_SMALL_SIZE}
        />
        <Image
          className="m-1"
          src="typescript.svg"
          alt="typescript"
          width={SVG_SMALL_SIZE}
          height={SVG_SMALL_SIZE}
        />
        <Image
          className="m-1"
          src="react.svg"
          alt="react"
          width={SVG_SMALL_SIZE}
          height={SVG_SMALL_SIZE}
        />
        <Image
          className="m-1"
          src="nextjs.svg"
          alt="nextjs"
          width={SVG_SMALL_SIZE}
          height={SVG_SMALL_SIZE}
        />
        <Image
          className="m-1"
          src="react-native.svg"
          alt="react-native"
          width={SVG_SMALL_SIZE}
          height={SVG_SMALL_SIZE}
        />
      </section>
      <div className="max-[720px]:block flex m-10 justify-center xl:flex-col  xl:w-full xl:items-center">
        <section className="flex flex-col m-5 w-1/2  max-[720px]:hidden xl:flex-row xl:w-full xl:justify-center xl:mb-10">
          <div className="xl:flex">
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
        <section className="flex-col w-1/2 max-[720px]:w-full xl:hidden">
          {DAYS.map(({ day, name }) => (
            <div key={name} className="flex my-2 max-[720px]:my-1">
              <div className="bg-rose-700 flex justify-center min-w-[150px] min-h-[40px] max-[720px]:min-h-[30px]  items-center">
                <span className="text-xl max-[720px]:text-sm">{name}</span>
              </div>
              <div className="bg-rose-900 flex justify-center flex-grow min-h-[40px] max-[720px]:min-h-[30px] items-center">
                <span className="text-xl max-[720px]:text-sm">{day}일</span>
              </div>
            </div>
          ))}
        </section>
        <div className="hidden xl:flex">
          <section className="text-center m-10 w-1/3 mr-20">
            <h2 className="text-rose-700 font-bold text-4xl mb-10">개요</h2>
            <p className="mb-5">
              <a
                target="_blank"
                href="https://42seoul.kr/seoul42/main/view"
                rel="noreferrer"
                className="no-underline hover:underline font-bold text-amber-400 mx-1"
              >
                42서울
              </a>
              에서 2년동안 C와 C++을 학습했습니다.
            </p>
            <p className="mb-5">
              물리학을 공부하던 입장에서는, 바로 실용적인 기술들을
              공부하기보다는
              <span className="text-rose-400 mx-1">
                C를 통해 컴퓨터 구조에 대해 보다 근본적으로 파악
              </span>
              할 수 있어 매우 재미있었습니다.
            </p>
            <p className="mb-5">
              42서울에서 여러 과제들을 풀며 얻은 기본적인 CS 지식을 통해,
              기본기를 튼튼하게 다진 뒤 웹 프론트엔드를 구현하기 위한 기술들을
              쌓았습니다.
              <span className="text-rose-400 mx-1">
                결과물이 바로 눈에 보인다는 것이 가장 큰 재미와 성취감
              </span>
              으로 다가와서, 웹 프론트엔드로 진로를 결심했습니다. React Native
              로 핸드폰 어플리케이션을 개발하는 것도 비슷한 이유로 매우
              재미있었습니다.
            </p>
          </section>
          <section className="flex-col w-1/2 max-[720px]:w-full">
            {DAYS.map(({ day, name }) => (
              <div key={name} className="flex my-2">
                <div className="bg-rose-700 flex justify-center min-w-[150px] min-h-[40px] items-center">
                  <span className="text-xl">{name}</span>
                </div>
                <div className="bg-rose-900 flex justify-center flex-grow min-h-[40px] items-center">
                  <span className="text-xl">{day}일</span>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <section className="text-center m-10 xl:hidden max-[720px]:text-sm">
        <p className="mb-5">
          <a
            target="_blank"
            href="https://42seoul.kr/seoul42/main/view"
            rel="noreferrer"
            className="no-underline hover:underline font-bold text-amber-400 mx-1"
          >
            42서울
          </a>
          에서 2년동안 C와 C++을 학습했습니다.
        </p>
        <p className="mb-5">
          물리학을 공부하던 입장에서는, 바로 실용적인 기술들을 공부하기보다는
          <span className="text-rose-400 mx-1">
            C를 통해 컴퓨터 구조에 대해 보다 근본적으로 파악
          </span>
          할 수 있어 매우 재미있었습니다.
        </p>
        <p className="mb-5">
          42서울에서 여러 과제들을 풀며 얻은 기본적인 CS 지식을 통해, 기본기를
          튼튼하게 다진 뒤 웹 프론트엔드를 구현하기 위한 기술들을 쌓았습니다.
          <span className="text-rose-400 mx-1">
            결과물이 바로 눈에 보인다는 것이 가장 큰 재미와 성취감
          </span>
          으로 다가와서, 웹 프론트엔드로 진로를 결심했습니다. React Native 로
          핸드폰 어플리케이션을 개발하는 것도 비슷한 이유로 매우 재미있었습니다.
        </p>
      </section>
    </main>
  );
};
