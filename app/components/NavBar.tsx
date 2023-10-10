import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="fixed py-2 top-0 w-full bg-rose-700 z-10 flex justify-center border-solid border-b-2">
      <Link className="px-2 md:px-5" href="#">
        TOP
      </Link>
      <Link className="px-2 md:px-5" href="#about">
        ABOUT
      </Link>
      <Link className="px-2 md:px-5" href="#portfolio">
        PORTFOLIO
      </Link>
      <Link className="px-2 md:px-5" href="#contact">
        CONTACT
      </Link>
    </nav>
  );
};
