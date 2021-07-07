import { User } from '../../../types';

export enum LoadingState {
  LOADIND = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export enum LoadNewTweetState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Tweet {
  _id: string;
  text: string;
  images?: [];
  createdAt: string;
  user: User;
}

export interface TweetsState {
  item: Tweet[];
  LoadingStatus: LoadingState;
  LoadNewTweet: LoadNewTweetState;
}
