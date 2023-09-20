import { EachPortfoilo } from "./EachPortfoilo";

export const Portfolio = () => {
  return (
    <>
      <span>포트폴리오 페이지</span>
      <p>포트폴리오 개요 리스트</p>
      <p>클릭시 포트폴리오 개별 페이지로 이동</p>
      <EachPortfoilo />
      <EachPortfoilo />
      <EachPortfoilo />
      {/*내부에 버튼 클릭시 포폴 페이지로 링크 */}
    </>
  );
};
