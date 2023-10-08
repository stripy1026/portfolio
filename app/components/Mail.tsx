import { MessageClass } from "models/Message";

type MailProps = {
  mail: MessageClass;
  createdAt: Date;
};

export const Mail = ({ mail, createdAt }: MailProps) => {
  const date = createdAt.toString();
  return (
    <div className="flex flex-col border-2 m-5 max-w-[700px]">
      <span className="border-b-2 p-2">이름: {mail.name}</span>
      <span className="border-b-2 p-2">제목: {mail.title}</span>
      <span className="border-b-2 p-2">{mail.message}</span>
      <span className="p-2">{date}</span>
    </div>
  );
};
