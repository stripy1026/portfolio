import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faBook,
  faGraduationCap,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const About = () => {
  return (
    <main>
      <span>소개 페이지</span>
      <div>
        <FontAwesomeIcon icon={faUser} />
        <span>조인우</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faCalendar} />
        <span>1995.10.26</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faGraduationCap} />
        <span>인하대학교 물리학과</span>
      </div>
      <div>
        <span>강점</span>
        <div>
          <FontAwesomeIcon icon={faBook} />
          <span>배움의 즐거움, 무한한 호기심</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faHeartCirclePlus} />
          <span>상대방을 존중, 무한한 이해심</span>
        </div>
      </div>
      <div>기술 스택</div>
      <div className="flex">
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
      </div>
      <div>comments</div>
    </main>
  );
};
