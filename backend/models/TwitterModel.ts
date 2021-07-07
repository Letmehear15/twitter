import { model, Schema, Document } from 'mongoose';

export interface TwitterModelInterface {
  _id?: string;
  text: string;
  user: string;
}

export type TwitterModelDocumentInterface = TwitterModelInterface & Document;

const TwitterModel = new Schema<TwitterModelDocumentInterface>(
  {
    text: {
      required: true,
      type: String,
      maxlength: 250,
    },
    user: {
      ref: 'User',
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

export const TwitterSchema = model<TwitterModelDocumentInterface>(
  'Twitter',
  TwitterModel
);
