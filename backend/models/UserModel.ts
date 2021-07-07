import { model, Schema, Document } from 'mongoose';

export interface UserModelInterface {
  _id?: string;
  email: string;
  fullName: string;
  username: string;
  password: string;
  confirmed?: boolean;
  confirmHash?: string;
  location?: string;
  website?: string;
  about?: string;
}

export type UserModelDocumentInterface = UserModelInterface & Document;

const UserModel = new Schema<UserModelDocumentInterface>({
  email: {
    required: true,
    unique: true,
    type: String,
  },
  fullName: {
    required: true,
    type: String,
  },
  username: {
    unique: true,
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  confirmHash: {
    required: true,
    type: String,
  },
  confirmed: {
    required: false,
    default: false,
    type: Boolean,
  },
  location: String,
  website: String,
  about: String,
});

UserModel.set('toJSON', {
  transform: function (_: any, obj: any) {
    delete obj.password;
    delete obj.confirmHash;
    return obj;
  },
});

export const UserSchema = model<UserModelDocumentInterface>('User', UserModel);
