import { EachPortfoilo } from "./EachPortfoilo";
import { Title } from "./Title";

export const Portfolio = () => {
  return (
    <main className="responsive min-h-full">
      <Title titleName="PORTFOLIO" />
      <div className="flex flex-col justify-center items-center m-20 xl:flex-row xl:flex-wrap">
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
      <div id="blog" />
    </main>
  );
};
