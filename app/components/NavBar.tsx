import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-red-500 z-10">
      <Link href="#">Top</Link>
      <Link href="#hello">Hello</Link>
      <Link href="#push">push</Link>
    </nav>
  );
};
