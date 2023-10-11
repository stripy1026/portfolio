"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

type TitleProps = {
  titleName: string;
};

export const Title = ({ titleName }: TitleProps) => {
  const animateItem = useScrollFadeIn();
  return (
    <div className="mt-20 mb-10 sm:mb-20 flex justify-center" {...animateItem}>
      <span className="text-rose-700 font-bold text-5xl underline">
        {titleName}
      </span>
    </div>
  );
};
