import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Detail } from "./Detail";

export default function Transcendence() {
  return (
    <main className="h-screen min-h-[920px]">
      <section className="relative w-screen h-screen min-h-[920px]">
        <Image
          src="/transcendence/bg_gray.jpg"
          alt="background image"
          fill={true}
        />
      </section>
      <section className="relative bottom-full">
        <div className="w-full bg-black py-5 pl-20 flex justify-between items-center">
          <Image
            src="/transcendence/logo.png"
            alt="logo"
            width={200}
            height={100}
          />
          <Link className="mr-16 text-4xl" href="/#portfolio">
            <FontAwesomeIcon icon={faBackspace} />
          </Link>
        </div>
        <div className="w-full bg-black/60">
          <div className="responsive flex justify-around items-center">
            <div className="border-2 p-6 m-5 rounded-full bg-gray-800 max-[620px]:hidden">
              <Image src="react.svg" alt="react" width={100} height={100} />
            </div>
            <div className="flex flex-col items-center max-[620px]:flex-row max-[620px]:my-4">
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-orange-500">
                  개발자 (총 5명)
                </span>
                <span>
                  Frontend:{" "}
                  <span className="text-orange-400 underline underline-offset-4">
                    조인우
                  </span>{" "}
                  외 2명
                </span>
                <span>Backend: 2명</span>
              </div>
              <div className="flex flex-col items-center max-[620px]:ml-5">
                <span className="text-lg font-semibold mt-4 text-orange-500">
                  개발 언어
                </span>
                <span>React / Nest.js</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-b-2 p-4 flex flex-col items-center bg-black/40 w-full">
            <p>
              고전게임 &quot;핑퐁&quot; 채널, 채팅 채널이 있는 웹 게임
              페이지입니다.
            </p>
            <div className="max-[530px]:flex max-[530px]:flex-col items-center">
              <span>저는 프론트엔드,</span>
              <span>그 중에서도 프로필 페이지 부분 제작을 맡았습니다.</span>
            </div>
          </div>
          <Detail />
        </div>
      </section>
    </main>
  );
}
