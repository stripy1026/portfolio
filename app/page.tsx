import { NavBar } from "@/components/NavBar";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <div>
      <NavBar />
      <Intro />
      <main className="flex flex-col items-center">
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
