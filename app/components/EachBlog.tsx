"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

type EachBlogProps = {};

export const EachBlog = ({}: EachBlogProps) => {
  const animateItem = useScrollFadeIn();

  return (
    <div {...animateItem}>
      <div>
        <span>BLOG POSTS</span>
      </div>
    </div>
  );
};
