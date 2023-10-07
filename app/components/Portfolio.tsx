import { EachPortfoilo } from "./EachPortfoilo";

export const Portfolio = () => {
  return (
    <main id="portfolio" className="responsive min-h-full">
      <div className="m-20 flex justify-center">
        <span className="text-rose-700 font-bold text-5xl underline">
          PORTFOLIO
        </span>
      </div>
      <p>포트폴리오 개요 리스트</p>
      <p>클릭시 포트폴리오 개별 페이지로 이동</p>
      <EachPortfoilo />
      <EachPortfoilo />
      <EachPortfoilo />
      {/*내부에 버튼 클릭시 포폴 페이지로 링크 */}
    </main>
  );
};
