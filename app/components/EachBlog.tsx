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
    <div className="h-[240px] sm:h-[320px] overflow-hidden" {...animateItem}>
      <Link href={href} target="_blank" rel="noreferrer">
        <div className="w-[300px] h-[120px] sm:w-[400px] sm:h-[160px] relative">
          <Image src={imageSrc} alt={title} fill={true} />
        </div>
        <h3 className="mt-2 font-bold text-lg">{title}</h3>
        <p className="text-xs">{createdDate}</p>
        <p className="text-sm my-2">{description}</p>
      </Link>
    </div>
  );
};