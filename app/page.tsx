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
        <div className="border-b-2 w-full" />
        <About />
        <div className="border-t-2 w-full" />
        <Portfolio />
        <div className="border-t-2 w-full" />
        <Contact />
      </main>
    </div>
  );
}
