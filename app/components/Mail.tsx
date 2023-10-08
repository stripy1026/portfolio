const DUMMY_MAIL = {
  _id: "65226eed4fd8f339a834c0ac",
  name: "테스트1",
  title: "제목1",
  message: "메세지ㅣ이ㅣ이ㅣ",
  createdAt: "2023-10-08T08:57:17.278Z",
  updatedAt: "2023-10-08T08:57:17.278Z",
  __v: 0,
  id: "65226eed4fd8f339a834c0ac",
};

export const Mail = () => {
  return (
    <div className="flex flex-col border-2 m-5 max-w-[700px]">
      <span className="border-b-2 p-2">이름: {DUMMY_MAIL.name}</span>
      <span className="border-b-2 p-2">제목: {DUMMY_MAIL.title}</span>
      <span className="border-b-2 p-2">{DUMMY_MAIL.message}</span>
      <span className="p-2">{DUMMY_MAIL.createdAt}</span>
    </div>
  );
};
