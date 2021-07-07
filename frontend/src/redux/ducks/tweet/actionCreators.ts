import {
  ActionTypes,
  FetchTweetsAction,
  SetLoadingAction,
  FetchNewTweet,
  SetTweetAction,
  SetNewTweet,
  SetAddNewTweetLoadState,
} from './contracts/actionsType';
import { LoadingState, LoadNewTweetState, Tweet } from './contracts/state';

export const setTweets = (payload: Tweet[]): SetTweetAction => ({
  type: ActionTypes.SET_TWEETS,
  payload,
});

export const fetchTweets = (): FetchTweetsAction => ({
  type: ActionTypes.FETCH_TWEETS,
});

export const setTweetLoading = (payload: LoadingState): SetLoadingAction => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

export const fetchNewTweet = (payload: string): FetchNewTweet => ({
  type: ActionTypes.FETCH_NEW_TWEET,
  payload,
});

export const setNewTweet = (payload: Tweet): SetNewTweet => ({
  type: ActionTypes.SET_NEW_TWEET,
  payload,
});

export const setNewTweetLoad = (
  payload: LoadNewTweetState
): SetAddNewTweetLoadState => ({
  type: ActionTypes.SET_NEW_TWEET_LOAD,
  payload,
});
