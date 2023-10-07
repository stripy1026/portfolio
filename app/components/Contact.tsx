export const Contact = () => {
  return (
    <main id="contact" className="responsive  min-h-full">
      <div className="m-20 flex justify-center">
        <span className="text-rose-700 font-bold text-5xl underline">
          CONTACT
        </span>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col flex-grow items-center border-2 rounded-xl my-5 min-w-[400px]">
          <span className="my-1 mt-5">TEL: 010-6404-7317</span>
          <span className="my-1">이메일: aequatio1026@gmail.com</span>
          <span className="my-1">주소: 경기도 용인시 수지구</span>
          <span className="my-1">
            <a
              href="https://github.com/stripy1026"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline font-bold text-amber-400 mx-1"
            >
              Github
            </a>
          </span>
          <span className="my-1 mb-5">
            <a
              href="https://stripy.tistory.com"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline font-bold text-amber-400 mx-1"
            >
              Blog
            </a>
          </span>
        </div>
        <div className="bg-blue-500">
          <span>이메일 적는 칸</span>
        </div>
      </div>
    </main>
  );
};
