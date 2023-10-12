import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBackspace, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { DetailWak } from "./DetailWak";
import { RegretWak } from "./RegretWak";

export default function WakQuote() {
  return (
    <main>
      <section className="w-full bg-gray-900 py-3 sm:py-5 pl-5 sm:pl-20 flex justify-between items-center">
        <div className="flex">
          <Link
            href="https://wak-quotes.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-xl sm:text-4xl mr-2 sm:mr-5">
              <FontAwesomeIcon icon={faWifi} />
              <span className="ml-1 text-xl">LIVE</span>
            </div>
          </Link>
          <Link
            href="https://github.com/stripy1026/wak-quotes"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-xl sm:text-4xl ml-2 sm:ml-5">
              <FontAwesomeIcon icon={faGithub} />
              <span className="ml-1 text-xl">GITHUB</span>
            </div>
          </Link>
        </div>
        <Link className="mr-8 sm:mr-16 text-2xl sm:text-4xl" href="/#portfolio">
          <FontAwesomeIcon icon={faBackspace} />
        </Link>
      </section>
      <section className="flex flex-col items-center mt-10 animate-fadeIn">
        <h1 className="font-black text-3xl sm:text-5xl mb-10">
          우왁굳 명언 아카이브
        </h1>
        <div className="flex">
          <div className="relative w-[320px] h-[180px] sm:w-[640px] sm:h-[360px] bg-[url('/wakQuote/quote_template.png')] bg-contain">
            <div className="relative left-[57%] w-[120px] sm:left-[60%] sm:w-[225px] mt-2 sm:mt-5">
              <div className="flex flex-col items-center">
                <p className="text-sm sm:text-xl font-bold">개발자 (1명)</p>
                <p className="text-xs sm:text-base">조인우</p>
                <p className="text-sm sm:text-xl font-bold mt-2 sm:mt-10">
                  개발 언어
                </p>
                <p className="text-xs sm:text-base">Next.js (Page router)</p>
                <p className="mt-2 sm:mt-10 text-xs sm:text-base">
                  트위치 스트리머 우왁굳의 명언을 자유롭게 기록하고 열람할 수
                  있는 사이트입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <DetailWak />
      </section>
    </main>
  );
}
