import {
  FullTweetAction,
  TweetFetchData,
  TweetSetLoad,
} from './contracts/actionTypes';
import { LoadingState, Tweet } from '../tweet/contracts/state';
import { TweetSetData } from './contracts/actionTypes';

export const setTweetData = (payload: Tweet | undefined): TweetSetData => ({
  type: FullTweetAction.TWEET_SET_DATA,
  payload,
});

export const fetchTweet = (payload: string): TweetFetchData => ({
  type: FullTweetAction.TWEET_FETCH_DATA,
  payload,
});

export const setLoadTweet = (payload: LoadingState): TweetSetLoad => ({
  type: FullTweetAction.TWEET_SET_LOADING,
  payload,
});
