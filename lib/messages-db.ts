import { Message } from "models/Message";
import connectDB from "./connect-db";
import { stringToObjectId } from "./utils";

export async function getMessages() {
  try {
    await connectDB();

    const messages = await Message.find({}).lean().exec();

    return { messages: messages };
  } catch (e) {
    return { e };
  }
}

export async function createMessage(
  name: string,
  title: string,
  message: string
) {
  try {
    await connectDB();
    const date = new Date();

    const result = await Message.create({ name, title, message, date });

    return { result };
  } catch (e) {
    return { e };
  }
}

export async function deleteMessage(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);
    if (!parsedId) {
      return { error: "Message not found" };
    }

    const message = await Message.findByIdAndDelete(parsedId).exec();
    if (message) {
      return {};
    } else {
      return { error: "Message not found" };
    }
  } catch (e) {
    return { e };
  }
}
