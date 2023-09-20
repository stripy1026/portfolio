import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-red-500 z-10">
      <Link href="#">TOP</Link>
      <Link href="#about">ABOUT</Link>
      <Link href="#portfolio">PORTFOLIO</Link>
      <Link href="#contact">CONTACT</Link>
    </nav>
  );
};
