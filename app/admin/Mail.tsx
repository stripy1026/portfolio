"use client";

import { deleteMessageAction } from "@/_actions";
import { MessageClass } from "models/Message";

type MailProps = {
  mail: MessageClass;
};

export const Mail = ({ mail }: MailProps) => {
  const handleDeleteMail = async () => {
    await deleteMessageAction({
      id: mail.id,
      path: `/admin?password=${process.env.ADMIN_PASSWORD}`,
    });
  };

  return (
    <div className="m-5">
      <div className="flex flex-col border-2 responsive">
        <span className="border-b-2 p-2 bg-slate-800">이름: {mail.name}</span>
        <span className="border-b-2 p-2">제목: {mail.title}</span>
        <span className="border-b-2 p-2 bg-slate-800">{mail.message}</span>
        <span className="p-2">{mail.date}</span>
      </div>
      <div>
        <button onClick={handleDeleteMail}>DELETE</button>
      </div>
    </div>
  );
};
