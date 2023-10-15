import { EachBlog } from "./EachBlog";
import { Title } from "./Title";

export const Blog = () => {
  return (
    <main className="responsive min-h-full">
      <Title titleName="BLOG" />
      <div className="flex flex-col justify-center items-center m-20 xl:flex-row xl:flex-wrap">
        <EachBlog
          imageSrc="/blogImages/pf_blog.png"
          title="FT_TRANSCENDENCE 회고"
          createdDate="2023.3.8"
          description="42 팀 프로젝트 ft_transcendence 회고"
          href="https://stripy.tistory.com/14"
        />
      </div>
    </main>
  );
};
