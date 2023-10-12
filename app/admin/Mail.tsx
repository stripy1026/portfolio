import { MessageClass } from "models/Message";

type MailProps = {
  mail: MessageClass;
};

export const Mail = ({ mail }: MailProps) => {
  return (
    <div className="flex flex-col border-2 m-5 max-w-[700px]">
      <span className="border-b-2 p-2 bg-slate-800">이름: {mail.name}</span>
      <span className="border-b-2 p-2">제목: {mail.title}</span>
      <span className="border-b-2 p-2 bg-slate-800">{mail.message}</span>
      <span className="p-2">{mail.date.toString()}</span>
    </div>
  );
};
