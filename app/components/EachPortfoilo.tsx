import Image from "next/image";

type EachPortfolioProps = {
  imageSrc: string;
  title: string;
  language: string;
};

export const EachPortfoilo = ({
  imageSrc,
  title,
  language,
}: EachPortfolioProps) => {
  // 대문사진, 제목, 개발언어 prop
  // 개별 페이지 이동 버튼
  const IMAGE_WIDTH = 400;
  const IMAGE_HEIGHT = (IMAGE_WIDTH * 9) / 16;

  return (
    <div>
      <Image
        src={imageSrc}
        alt={title}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
      />
    </div>
  );
};
