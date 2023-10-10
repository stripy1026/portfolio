import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBlog,
  faHome,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MessageForm } from "./MessageForm";

export const Contact = () => {
  return (
    <main id="contact" className="responsive  min-h-full">
      <div className="mt-20 flex justify-center">
        <span className="text-rose-700 font-bold text-5xl underline">
          CONTACT
        </span>
      </div>
      <div className="flex flex-col items-center w-full mt-10">
        <div className="flex flex-col flex-grow items-center border-2 rounded-xl my-5 min-w-[300px] sm:min-w-[400px]">
          <span className="my-1 mt-5">
            <FontAwesomeIcon icon={faPhone} /> 010-6404-7317
          </span>
          <span className="my-1">
            <FontAwesomeIcon icon={faMailBulk} /> aequatio1026@gmail.com
          </span>
          <span className="my-1">
            <FontAwesomeIcon icon={faHome} /> 경기도 용인시 수지구
          </span>
          <span className="my-1">
            <a
              href="https://github.com/stripy1026"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline font-bold text-amber-400 mx-1"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white mr-1" />
              Github
            </a>
          </span>
          <span className="my-1 mb-5">
            <a
              href="https://stripy.tistory.com"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline font-bold text-amber-400 mx-1"
            >
              <FontAwesomeIcon icon={faBlog} className="text-white mr-1" />
              Blog
            </a>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl mt-10">메세지를 남겨주세요</span>
          <span>이 메세지는 관리자만 확인 가능합니다</span>
          <MessageForm />
        </div>
      </div>
    </main>
  );
};
