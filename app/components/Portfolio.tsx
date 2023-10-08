import { EachPortfoilo } from "./EachPortfoilo";

export const Portfolio = () => {
  return (
    <main id="portfolio" className="responsive min-h-full">
      <div className="m-20 flex justify-center">
        <span className="text-rose-700 font-bold text-5xl underline">
          PORTFOLIO
        </span>
      </div>
      <EachPortfoilo
        imageSrc="/transcendence_1.png"
        title="transcendence"
        language="React / node.js"
      />
      <EachPortfoilo
        imageSrc="/transcendence_1.png"
        title="transcendence"
        language="React / node.js"
      />
      <EachPortfoilo
        imageSrc="/transcendence_1.png"
        title="transcendence"
        language="React / node.js"
      />
    </main>
  );
};
