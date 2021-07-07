export interface User {
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
  token?: string
}
