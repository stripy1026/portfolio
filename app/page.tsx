import { NavBar } from "@/components/NavBar";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <NavBar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
