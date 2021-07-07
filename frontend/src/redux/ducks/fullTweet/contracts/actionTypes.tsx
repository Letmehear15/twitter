import { LoadingState, Tweet } from '../../tweet/contracts/state';
import { TweetState } from './state';

export enum FullTweetAction {
  TWEET_FETCH_DATA = './ducks/fullTweet/tweetFetch',
  TWEET_SET_DATA = './ducks/fullTweet/tweetSet',
  TWEET_SET_LOADING = './ducks/fullTweet/twettLoading',
}

export interface TweetFetchData {
  type: FullTweetAction.TWEET_FETCH_DATA;
  payload: string;
}

export interface TweetSetData {
  type: FullTweetAction.TWEET_SET_DATA;
  payload: Tweet | undefined;
}

export interface TweetSetLoad {
  type: FullTweetAction.TWEET_SET_LOADING;
  payload: LoadingState;
}

export type TweetActionTypes = TweetFetchData | TweetSetData | TweetSetLoad;
