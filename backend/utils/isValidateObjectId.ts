import { mongoose } from '../core/db';

export const isValidId = mongoose.Types.ObjectId.isValid;
