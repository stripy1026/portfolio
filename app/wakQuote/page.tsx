import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBackspace, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { DetailWak } from "./DetailWak";

export default function WakQuote() {
  return (
    <main className="h-screen">
      <section className="w-full bg-gray-900 py-5 pl-20 flex justify-between items-center">
        <div className="flex">
          <Link
            href="https://transcendence.42world.kr/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-4xl mr-5">
              <FontAwesomeIcon icon={faWifi} />
              <span className="ml-1 text-xl">LIVE</span>
            </div>
          </Link>
          <Link
            href="https://github.com/42Blank/ft_transcendence"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-4xl ml-5">
              <FontAwesomeIcon icon={faGithub} />
              <span className="ml-1 text-xl">GITHUB</span>
            </div>
          </Link>
        </div>
        <Link className="mr-16 text-4xl" href="/#portfolio">
          <FontAwesomeIcon icon={faBackspace} />
        </Link>
      </section>
      <section className="flex flex-col items-center mt-10">
        <h1 className="font-black text-5xl mb-10">우왁굳 명언 아카이브</h1>
        <div className="flex">
          <div className="relative w-[640px] h-[360px]">
            <Image
              src="/wakQuote/quote_template.png"
              alt="template"
              fill={true}
            />
            <div className="relative left-[60%] w-[225px] mt-5">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">개발자 (1명)</p>
                <p>조인우</p>
                <p className="text-xl font-bold mt-10">개발 언어</p>
                <p>Next.js (Page router)</p>
                <p className="mt-10">
                  트위치 스트리머 우왁굳의 명언을 자유롭게 기록하고 열람할 수
                  있는 사이트입니다.
                </p>
              </div>
            </div>
          </div>
          <div className="max-[1279px]:hidden ml-20 flex flex-col items-center  max-w-[400px] p-10 border-2 border-dotted">
            <p className="text-2xl font-bold mb-5">후회의 기록</p>
            <p>
              나의 첫 웹 페이지를 만드는 팀 프로젝트가 끝나고, 처음으로 진행했던
              토이 프로젝트.
            </p>
            <p>
              &nbsp;풀스택 웹 페이지를 만들어보고 싶다는 일념만으로 진행했던
              프로젝트였다.
            </p>
            <p>
              &nbsp;혼자서 웹 페이지를 만드는 것이 처음이었어서, 리팩토링 하고픈
              아쉬운 부분이 많다.
            </p>
            <p>
              &nbsp;사실상 처음으로 CSS를 혼자서 만들었는데, 그땐 CSS를 다루기가
              너무 어려워 chatGPT에 거의 의존했었고, 그럼에도 미비한 디자인이
              너무 아쉬웠던 기억이 있다.
            </p>
          </div>
        </div>
        <DetailWak />
      </section>
    </main>
  );
}
