"use client";

import { useState } from "react";

export const RegretWak = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <button onClick={() => setIsShow((prev) => !prev)}>
        <div className="ml-20 flex flex-col items-center  max-w-[400px]">
          {!isShow && (
            <div className="w-[200px] h-[180px] sm:w-[400px] sm:h-[376px] flex items-center justify-center animate-pulse">
              <span className="text-2xl font-bold text-blue-700">SEE MORE</span>
            </div>
          )}
          {isShow && (
            <div className="p-5 sm:p-10 border-2 border-dotted animate-fadeIn">
              <p className="sm:text-2xl font-bold mb-5">후회의 기록</p>
              <div className="text-xs sm:text-base">
                <p>
                  나의 첫 웹 페이지를 만드는 팀 프로젝트가 끝나고, 처음으로
                  진행했던 토이 프로젝트.
                </p>
                <p>
                  &nbsp;풀스택 웹 페이지를 만들어보고 싶다는 일념만으로 진행했던
                  프로젝트였다.
                </p>
                <p>
                  &nbsp;혼자서 웹 페이지를 만드는 것이 처음이었어서, 리팩토링
                  하고픈 아쉬운 부분이 많다.
                </p>
                <p>
                  &nbsp;사실상 처음으로 CSS를 혼자서 만들었는데, 그땐 CSS를
                  다루기가 너무 어려워 chatGPT에 거의 의존했었고, 그럼에도
                  미비한 디자인이 너무 아쉬웠던 기억이 있다.
                </p>
              </div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};
