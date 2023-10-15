"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import Link from "next/link";

type EachBlogProps = {
  imageSrc: string;
  title: string;
  createdDate: string;
  description: string;
  href: string;
};

export const EachBlog = ({
  imageSrc,
  title,
  createdDate,
  description,
  href,
}: EachBlogProps) => {
  const animateItem = useScrollFadeIn();

  return (
    <div
      className="w-[300px] h-[240px] sm:w-[400px] sm:h-[320px] overflow-hidden m-4"
      {...animateItem}
    >
      <Link href={href} target="_blank" rel="noreferrer">
        <div className="w-[300px] h-[120px] sm:w-[400px] sm:h-[160px] relative">
          <Image src={imageSrc} alt={title} fill={true} />
        </div>
        <h3 className="mt-2 font-bold text-lg text-rose-700">{title}</h3>
        <p className="text-xs text-gray-300">{createdDate}</p>
        <p className="text-sm my-2 text-gray-300">{description}</p>
      </Link>
    </div>
  );
};
