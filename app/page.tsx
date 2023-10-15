import { NavBar } from "@/components/NavBar";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Blog } from "./components/Blog";

export default function Page() {
  return (
    <div>
      <NavBar />
      <Intro />
      <main className="flex flex-col items-center">
        <div className="border-b-2 w-full" />
        <About />
        <div className="w-full h-10 flex">
          <div className="border-t-2 w-full skew-y-12 xl:skew-y-6" />
          <div className="border-t-2 w-full -skew-y-12 xl:-skew-y-6" />
        </div>
        <Portfolio />
        <div className="w-full h-10 flex">
          <div className="border-t-2 w-full skew-y-12 xl:skew-y-6" />
          <div className="border-t-2 w-full -skew-y-12 xl:-skew-y-6" />
        </div>
        <Blog />
        <div className="w-full h-10 flex">
          <div className="border-t-2 w-full skew-y-12 xl:skew-y-6" />
          <div className="border-t-2 w-full -skew-y-12 xl:-skew-y-6" />
        </div>
        <Contact />
      </main>
    </div>
  );
}
