import { NavBar } from "@/components/NavBar";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <section>
        <NavBar />
      </section>
      <section>
        <Intro />
      </section>
      <section id="about" className="w-full h-screen my-5 bg-slate-500">
        <About />
      </section>
      <section id="portfolio" className="w-full h-screen my-5 bg-slate-500">
        <Portfolio />
      </section>
      <section id="contact" className="w-full h-screen my-5 bg-slate-500">
        <Contact />
      </section>
    </main>
  );
}
