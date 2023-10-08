import clientPromise from "@/lib/mongodb";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success?: boolean;
  err?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    if (req.method !== "POST")
      return res.status(405).json({ err: "Method Not Allowed." });

    const { name, title, message } = req.body;

    if (!name || name.length > 80) return res.status(422);
    if (!title || title.length > 80) return res.status(422);
    if (!message || message.length > 1000) return res.status(422);

    const date = new Date();

    await db
      .collection(process.env.MESSAGES_COLLECTION_NAME as string)
      .insertOne({ name, title, message, date });

    res.status(200).json({ success: true });
  } catch (e) {
    console.log("ERROR LOG: ", e);
    res.status(500).json({ err: "Internal Server Error." });
  }
}
