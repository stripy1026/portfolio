import Image from "next/image";

export default function Transcendence() {
  return (
    <main className="responsive h-screen">
      <section className="relative w-screen h-screen">
        <Image src="/bg_gray.jpg" alt="background image" fill={true} />
      </section>
      <section className="relative bottom-full">
        <div>
          <span>content</span>
        </div>
        <div>
          <span>content</span>
        </div>
        <div>
          <span>content</span>
        </div>
        <div>
          <span>content</span>
        </div>
        <div>
          <span>content</span>
        </div>
      </section>
    </main>
  );
}
