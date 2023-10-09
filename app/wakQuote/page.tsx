import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBackspace, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

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
                트위치 스트리머 우왁굳의 명언을 자유롭게 기록하고 열람할 수 있는
                사이트입니다.
              </p>
            </div>
          </div>
        </div>
        <div className="max-[1279px]:hidden mt-10 flex">
          <div className="mx-5">
            <Image
              src="/wakQuote/wakQuote_main.png"
              alt="img1"
              width={300}
              height={220}
            />
          </div>
          <div className="mx-5">
            <Image
              src="/wakQuote/wakQuote_ranking.png"
              alt="img1"
              width={300}
              height={220}
            />
          </div>
          <div className="mx-5">
            <Image
              src="/wakQuote/wakQuote_profile.png"
              alt="img1"
              width={300}
              height={220}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
