import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  post,
  prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<MessageClass>("save", function (doc) {
  if (doc) {
    doc.id = doc._id.toString();
    doc._id = doc.id;
  }
})
@post<MessageClass[]>(/^find/, function (docs) {
  // @ts-ignore
  if (this.op === "find") {
    docs.forEach((doc) => {
      doc.id = doc._id.toString();
      doc._id = doc.id;
    });
  }
})
@ModelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "messages",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ title: 1 })
class MessageClass {
  @prop({ required: true })
  name: string;
  @prop({ required: true })
  title: string;
  @prop({ required: true })
  message: string;
  @prop({ required: true })
  date: string;

  _id: mongoose.Types.ObjectId | string;

  id: string;
}

const Message = getModelForClass(MessageClass);
export { Message, MessageClass };
