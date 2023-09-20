import { NavBar } from "@/components/NavBar";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";

export default function Page() {
  return (
    <main>
      <section>
        <NavBar />
      </section>
      <section className="w-full h-screen my-5 bg-slate-500">
        <Intro />
      </section>
      <section id="about" className="w-full h-screen my-5 bg-slate-500">
        <About />
      </section>
    </main>
  );
}
