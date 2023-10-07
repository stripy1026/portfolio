export const MessageForm = () => {
  return (
    <div className="my-10">
      <div className="flex mb-2">
        <div className="bg-rose-900 mr-2 py-1 px-2">
          <span>이름</span>
        </div>
        <input
          className="bg-gray-900 min-w-[344px] px-2"
          maxLength={80}
          placeholder="80자 이하"
        />
      </div>
      <div className="flex mb-2">
        <div className="bg-rose-900 mr-2 py-1 px-2">
          <span>제목</span>
        </div>
        <input
          className="bg-gray-900 min-w-[344px] px-2"
          maxLength={80}
          placeholder="80자 이하"
        />
      </div>
      <textarea
        className="bg-gray-900 min-w-[400px] min-h-[200px] p-2"
        placeholder="메세지를 입력해주세요"
        maxLength={1000}
      />
      <div className="flex justify-end">
        <button className="border-2 p-2 border-gray-700 text-rose-700">
          SUBMIT
        </button>
      </div>
    </div>
  );
};
