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
    <section className="flex w-full justify-around min-h-[200px] sm:min-h-[400px] ">
      <div
        className="p-2 w-5/12 sm:border-2 rounded-xl flex flex-col items-center"
        {...animatedCard1}
      >
        <div id="pentagon" className="mt-5 sm:mt-10">
          <div className="text-7xl m-10">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className="text-xs sm:text-lg m-2 sm:mt-20 mt-10 flex">
          <FontAwesomeIcon className="mx-2 mt-1" icon={faCalendar} />
          <div>
            <span>1995.10.26</span>
          </div>
        </div>
        <div className="text-xs sm:text-lg m-2 flex">
          <FontAwesomeIcon className="mx-2 mt-1" icon={faGraduationCap} />
          <div>
            <span className="mr-1">인하대학교</span>
            <span className="block sm:inline-block">물리학과</span>
          </div>
        </div>
      </div>
      <div
        className="p-2 w-5/12 sm:border-2 rounded-xl flex flex-col items-center"
        {...animatedCard2}
      >
        <div id="pentagon" className="mt-5 sm:mt-10">
          <div className="text-7xl m-10">
            <FontAwesomeIcon className="ml-2" icon={faBoltLightning} />
          </div>
        </div>
        <div className="text-xs sm:text-lg m-2 mt-10  sm:mt-20 flex">
          <FontAwesomeIcon className="mx-2 mt-1" icon={faBook} />
          <div className="flex flex-col md:block">
            <span className="mr-1">배움의 즐거움,</span>
            <span className="block sm:inline-block">무한한 호기심</span>
          </div>
        </div>
        <div className="text-xs sm:text-lg m-2 flex">
          <FontAwesomeIcon className="mx-2 mt-1" icon={faHeartCirclePlus} />
          <div className="flex flex-col md:block">
            <span className="mr-1">상대방을 존중,</span>
            <span className="block sm:inline-block">무한한 이해심</span>
          </div>
        </div>
      </div>
    </section>
  );
};
