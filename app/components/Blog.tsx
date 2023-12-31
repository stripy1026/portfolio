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
        <EachBlog
          imageSrc="/blogImages/algo_blog.png"
          title="다익스트라 알고리즘은 이렇게 쓰는 게 맞다!"
          createdDate="2023.8.18"
          description="
          알고리즘 문제를 푼 사람들의 코드를 보면, 다들 다익스트라의 개념은 맞지만 조금씩 다르게 구현해서 쓰고 있었다.
          그 중에는 쓸데없이 성능상 저하가 있는 코드도 있었고,
          이런 특수한 케이스에서는 틀릴 것 같은데? 싶은 코드도 있었다.
          따라서 나는 알고리즘 문제를 풀기에 가장 적합한 다익스트라 알고리즘의 코드를 만들었다. (내 머리에서 가장 적합하다고 생각한 것이기 때문에, 이보다 더 좋은 구현이 있을 수도 있지만) 다음 블록에 내 다익스트라 알고리즘의 코드를 주석으로 설명해서 정리하겠다."
          href="https://stripy.tistory.com/21"
        />
        <EachBlog
          imageSrc="/blogImages/async_blog.png"
          title="당신이 async/await 을 사용할 때 자바스크립트는.."
          createdDate="2023.10.14"
          description="
          자바스크립트의 실행 컨텍스트까지 공부하고, 자바스크립트 엔진이 어떻게 동작하는 지 아는 사람이라면, 자바스크립트는 단 하나의 실행 컨텍스트 (콜스택) 을 갖고, 싱글 쓰레드로 동작한다는 사실을 알 것이다. C를 공부할 때는 함수를 비동기로 처리하기 위해 멀티 프로세스, 멀티 쓰레드 방식을 이용했다. 하지만 자바스크립트는 멀티 쓰레드를 지원하지 않으므로, 이를 할 수 없다. 그럼에도 우리는 자바스크립트에서 비동기 처리를 한다. 어떻게 된 일일까?"
          href="https://stripy.tistory.com/26"
        />
        <EachBlog
          imageSrc="/blogImages/drive_blog.png"
          title="클린 코드는 방어운전과 같다"
          createdDate="2023.10.21"
          description="
          클린 코드를 지키지 않으면 오늘은 효율이 높지만, 내일은 코드를 갈아엎고 새로 써야 한다.
- 도로에서 신호를 무시하고 과속하면 당장은 빠르지만, 얼마 안 가서 교통사고가 난다.
1인 프로젝트에서는 클린 코드를 지키지 않아도 문제 될 것이 없다. 어차피 모든 로직이 내 머리안에 있으니까.
- 서울에 사람이 나 혼자밖에 없으면 차선과 신호등을 지킬 필요가 없다.
클린 코드를 짜야 하는 이유는, 다른 사람들과의 협업에서 보다 작업 효율과 능률을 향상시키기 위함이다.
- 방어운전을 하는 이유는, 도로에 다른 차들과 함께 운전할 때 사고가 나지 않게 하기 위함이다.
= 내가 코드를 짤 때는 다음 내용을 명심해야 한다.
내가 만든 컴포넌트, 훅, 유틸리티 함수, 객체 등은 언제든 다른 사람이 사용할 수 있다.
시시각각 기획과 디자인과 백엔드의 데이터가 바뀌는 환경에서, 내 코드는 막강한 재사용성으로 모두 유연하게 대응할 수 있어야 한다.
사실상 이게 핵심이고, 이에 맞춰서 코딩을 하는 것이 바로 클린 코딩이라고 할 수 있겠다."
          href="https://stripy.tistory.com/28"
        />
      </div>
    </main>
  );
};
