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
        </div>
      </section>
    </main>
  );
}
