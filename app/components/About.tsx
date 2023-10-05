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

export const About = () => {
  return (
    <main id="about">
      <section className="pt-20 flex justify-around">
        <div className="flex p-2 border-2 rounded-xl">
          <div className="text-xl m-2 flex items-center">
            <FontAwesomeIcon icon={faUser} />
            <span className="mx-2">조인우</span>
          </div>
          <div className="flex-col">
            <div className="text-xl m-2">
              <FontAwesomeIcon icon={faCalendar} />
              <span className="mx-5">1995.10.26</span>
            </div>
            <div className="text-xl m-2">
              <FontAwesomeIcon icon={faGraduationCap} />
              <span className="mx-2">인하대학교 물리학과</span>
            </div>
          </div>
        </div>
        <div className="flex p-2 border-2 rounded-xl">
          <div className="text-xl m-2 flex items-center">
            <FontAwesomeIcon icon={faBoltLightning} />
            <span className="mx-2">강점</span>
          </div>
          <div className="flex-col">
            <div className="text-xl m-2">
              <FontAwesomeIcon icon={faBook} />
              <span className="mx-4">배움의 즐거움, 무한한 호기심</span>
            </div>
            <div className="text-xl m-2">
              <FontAwesomeIcon icon={faHeartCirclePlus} />
              <span className="mx-2">상대방을 존중, 무한한 이해심</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex">
        <Image src="C.svg" alt="C" width={96} height={96} />
        <Image src="C++.svg" alt="C++" width={96} height={96} />
        <Image src="html.svg" alt="html" width={96} height={96} />
        <Image src="css.svg" alt="css" width={96} height={96} />
        <Image src="javascript.svg" alt="javascript" width={96} height={96} />
        <Image src="typescript.svg" alt="typescript" width={96} height={96} />
        <Image src="react.svg" alt="react" width={96} height={96} />
        <Image src="nextjs.svg" alt="nextjs" width={96} height={96} />
        <Image
          src="react-native.svg"
          alt="react-native"
          width={96}
          height={96}
        />
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
