import { NavBar } from "@/components/NavBar";

export default function Page() {
  return (
    <main>
      <NavBar />
      <section className="mt-10">
        <div className="py-96 bg-green-500"></div>
        <h1 id="hello" className="pt-10">
          <span>안녕, NextJS!</span>
        </h1>
        <div className="py-96 bg-green-500"></div>
        <h2 id="push" className="pt-10">
          <span>푸쉬 테스트</span>
        </h2>
        <div className="py-96 bg-green-500"></div>
      </section>
    </main>
  );
}
