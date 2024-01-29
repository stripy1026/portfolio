import { faBackspace, faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function WakJot() {
  return (
    <main className="h-screen bg-white">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[#F0F1FF] opacity-60">
        <Image
          src={"/wakJot/bg-lilpa.png"}
          alt="background image"
          width={360}
          height={640}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-4 flex flex-col items-center">
          <div className="flex items-center">
            <p className="text-4xl font-black ml-10 mr-5">WAKJOT</p>
            <Link className="mr-4 sm:mr-16 text-2xl" href="/#portfolio">
              <FontAwesomeIcon icon={faBackspace} />
            </Link>
          </div>
          <FontAwesomeIcon
            className="text-9xl my-10 text-yellow-400"
            icon={faHelmetSafety}
          />
          <p>버전 1.0.0</p>
          <p>2023년 9월 5일 개발 시작</p>
          <p>2023년 10월 2일 개발 완료</p>
          <p>버전 2.0.0</p>
          <p>현재 개발 진행중</p>
          <p>버전 1.0.0</p>
          <p>2023년 9월 5일 개발 시작</p>
          <p>2023년 10월 2일 개발 완료</p>
          <p>버전 2.0.0</p>
          <p>현재 개발 진행중</p>
        </div>
      </div>
    </main>
  );
}
