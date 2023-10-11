import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WakJot() {
  return (
    <main className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-20 flex flex-col items-center">
          <p className="text-5xl font-black">WAKJOT</p>
          <FontAwesomeIcon
            className="text-9xl my-10 text-yellow-400"
            icon={faHelmetSafety}
          />
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
