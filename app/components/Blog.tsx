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
          imageSrc="/blogImages/iamInwoo_blog.png"
          title="I AN INWOO 회고"
          createdDate="2023.10.13"
          description="UI/UX 와 디자인 고민: 이번 포트폴리오 페이지를 만들면서 가장 많이 실력이 늘었던 부분이다.
          나는 이력서는 PDF 로 담백하게 기술적인 정보들을 담고, 포트폴리오 페이지는 최대한 사람들을 사로잡을 수 있게 구현하는 것을 목표로 했다.
          따라서 포트폴리오 페이지를 만들기 위해 내가 기존에 가졌던 CSS 실력을 월등히 키워야 함을 느꼈다.
          내 첫 웹 프로젝트 때는 CSS 라이브러리로 emotion 을 사용했었고,
          두 번째 1인 토이프로젝트 때는 tailwindcss 를 사용했었다.
          그 때 나는 CSS 실력이 매우 처참해서 디자인을 거의 버렸음에도 불구하고, tailwindcss 의 강력함과 편의성을 체감한 상태였다.
          따라서 이번 프로젝트에서는 tailwindcss 의 공식문서를 깊게 탐독하며, 내가 이것으로 할 수 있는 기능들이 무엇인지 전부 읽고 적용시키려 노력했다."
          href="https://stripy.tistory.com/24"
        />
      </div>
    </main>
  );
};
