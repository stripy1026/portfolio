"use server";

import { createMessage, deleteMessage } from "lib/messages-db";
import { revalidatePath } from "next/cache";

export async function createMessageAction({
  name,
  title,
  message,
  path,
}: {
  name: string;
  title: string;
  message: string;
  path: string;
}) {
  await createMessage(name, title, message);
  revalidatePath(path);
}

export async function deleteMessageAction({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  await deleteMessage(id);
  revalidatePath(path);
}
