import { EachPortfoilo } from "./EachPortfoilo";

export const Portfolio = () => {
  return (
    <main id="portfolio" className="responsive min-h-full">
      <div className="m-20 flex justify-center">
        <span className="text-rose-700 font-bold text-5xl underline">
          PORTFOLIO
        </span>
      </div>
      <div className="flex flex-col justify-center items-center mb-20 mx-20  xl:flex-row xl:flex-wrap">
        <EachPortfoilo
          imageSrc="/transcendence/transcendence_1.png"
          title="transcendence"
          language="React / Nest.js"
          href="/transcendence"
        />
        <EachPortfoilo
          imageSrc="/wakQuote/wakQuote_main.png"
          title="우왁굳 명언 아카이브"
          language="Next.js"
          href="/wakQuote"
        />
        <EachPortfoilo
          imageSrc="/wakJot/wakJot_main.png"
          title="왁JOT"
          language="React Native"
          href="/wakJot"
        />
        <EachPortfoilo
          imageSrc="/IsegyeUniverse/construction.svg"
          title="이세계 유니버스"
          language="Next.js / Express"
          href="/IsegyeUniverse"
        />
      </div>
    </main>
  );
};
