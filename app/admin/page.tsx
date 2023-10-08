import { Mail } from "@/components/Mail";
import { getMessages } from "lib/messages-db";

export default async function Admin() {
  const { messages } = await getMessages();

  messages?.reverse();

  return (
    <div className="min-h-screen">
      <span>ADMIN PAGE</span>
      {messages?.map((mail) => (
        <Mail key={mail.id} mail={mail} createdAt={mail.createdAt} />
      ))}
    </div>
  );
}
