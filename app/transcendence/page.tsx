import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Detail } from "./Detail";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Transcendence() {
  return (
    <main className="h-screen bg-[url('/transcendence/bg_gray.jpg')]">
      <section className="animate-fadeIn">
        <div className="w-full bg-black pl-2 py-2 sm:py-5 sm:pl-20 flex justify-between items-center">
          <div className="flex">
            <Link
              href="https://transcendence.42world.kr/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/transcendence/logo.png"
                alt="logo"
                width={200}
                height={100}
              />
            </Link>
            <Link
              href="https://github.com/42Blank/ft_transcendence"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-4xl mt-2 ml-5">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </Link>
          </div>
          <Link className="mr-4 sm:mr-16 text-4xl" href="/#portfolio">
            <FontAwesomeIcon icon={faBackspace} />
          </Link>
        </div>
        <div className="w-full bg-black/60">
          <div className="responsive flex justify-around items-center">
            <div className="border-2 p-6 m-2 sm:m-5 rounded-full bg-gray-800">
              <Image src="react.svg" alt="react" width={100} height={100} />
            </div>
            <div className="flex flex-col items-center my-4">
              <div className="flex flex-col items-center">
                <span className="text-sm mb-2 sm:mb-0 sm:text-lg font-semibold text-orange-500">
                  개발자 (총 5명)
                </span>
                <span className="text-xs sm:text-base">
                  Frontend:{" "}
                  <span className="text-orange-400 underline underline-offset-4">
                    조인우
                  </span>{" "}
                  외 2명
                </span>
                <span className="text-xs sm:text-base">Backend: 2명</span>
              </div>
              <div className="flex flex-col items-center ml-2 sm:ml-0">
                <span className="text-sm sm:text-lg font-semibold mt-4 text-orange-500">
                  개발 언어
                </span>
                <span className="text-xs sm:text-base">React / Nest.js</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-b-2 p-2 sm:p-4 flex flex-col items-center bg-black/40 w-full">
            <p className="text-xs sm:text-base">
              고전게임 &quot;핑퐁&quot; 채널, 채팅 채널이 있는 웹 게임
              페이지입니다.
            </p>
            <div className="max-[530px]:flex max-[530px]:flex-col items-center">
              <span className="text-xs sm:text-base">저는 프론트엔드,</span>
              <span className="text-xs sm:text-base">
                그 중에서도 프로필 페이지 부분 제작을 맡았습니다.
              </span>
            </div>
          </div>
          <Detail />
        </div>
      </section>
    </main>
  );
}
