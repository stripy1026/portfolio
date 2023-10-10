"use client";

import { useScrollFlip } from "@/hooks/useScrollFlip";
import {
  faBoltLightning,
  faBook,
  faCalendar,
  faGraduationCap,
  faHeartCirclePlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutCards = () => {
  const animatedCard1 = useScrollFlip();
  const animatedCard2 = useScrollFlip();

  return (
    <section className="flex w-full justify-around min-h-[400px] max-[720px]:min-h-[200px]">
      <div
        className="p-2 w-5/12 border-2 rounded-xl flex flex-col items-center"
        {...animatedCard1}
      >
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
      <div
        className="p-2 w-5/12 border-2 rounded-xl flex flex-col items-center"
        {...animatedCard2}
      >
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
  );
};
