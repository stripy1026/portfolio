import { Mail } from "./Mail";
import { getMessages } from "lib/messages-db";
import Link from "next/link";

export default async function Admin({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { messages } = await getMessages();
  messages?.reverse();

  return (
    <div className="min-h-screen">
      <h1>ADMIN PAGE</h1>
      <Link href="/">GO HOME</Link>
      {searchParams?.password === process.env.ADMIN_PASSWORD ? (
        messages?.map((mail) => (
          <Mail key={mail.id} mail={mail} createdAt={mail.createdAt} />
        ))
      ) : (
        <p>INCORRECT PASSWORD</p>
      )}
    </div>
  );
}
