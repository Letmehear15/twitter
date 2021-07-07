import { User } from '../../../types';

export enum LoadingState {
  LOADIND = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}


export interface UserState {
  item: User | null;
  LoadingStatus: LoadingState
}

export interface UserRegisterData {
  password: string,
  password2: string,
  email: string,
  fullname: string,
  username: string,
}
