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
          description="처음 팀이 결성될 당시 나는 C, C++ 만을 공부한 상태였고, C++ 로 채팅 서버를 구현하는 과제를 한 덕에 소켓 프로그래밍에 대한 이해는 어느 정도 된 상태였지만, 클라이언트 쪽 지식은 전무했고 당연히 자바스크립트, 웹 브라우저에 대한 지식도 없는 백지 상태였다."
          href="https://stripy.tistory.com/14"
        />
        <EachBlog
          imageSrc="/blogImages/pf_blog.png"
          title="FT_TRANSCENDENCE 회고"
          createdDate="2023.3.8"
          description="처음 팀이 결성될 당시 나는 C, C++ 만을 공부한 상태였고, C++ 로 채팅 서버를 구현하는 과제를 한 덕에 소켓 프로그래밍에 대한 이해는 어느 정도 된 상태였지만, 클라이언트 쪽 지식은 전무했고 당연히 자바스크립트, 웹 브라우저에 대한 지식도 없는 백지 상태였다."
          href="https://stripy.tistory.com/14"
        />
      </div>
    </main>
  );
};
