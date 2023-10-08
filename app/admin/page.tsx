import { Mail } from "@/components/Mail";
import { getMessages } from "lib/messages-db";

export default async function Admin() {
  const { messages } = await getMessages();

  console.log(messages);

  return (
    <div>
      <span>ADMIN PAGE</span>
      <Mail />
    </div>
  );
}
