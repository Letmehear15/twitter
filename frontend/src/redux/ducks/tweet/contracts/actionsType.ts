import { Action } from 'redux';
import { LoadingState, LoadNewTweetState, Tweet } from './state';

export enum ActionTypes {
  SET_TWEETS = 'tweet/actionTypes/setTweets',
  FETCH_TWEETS = 'tweet/actionTypes/fetchTweets',
  SET_LOADING = 'tweet/actionTypes/setLoading',
  FETCH_NEW_TWEET = 'tweet/actionTypes/fetchNewTweet',
  SET_NEW_TWEET = 'tweet/actionTypes/setNewTweet',
  SET_NEW_TWEET_LOAD = 'tweet/actionTypes/setNewTweetLoad',
}

export interface SetTweetAction extends Action<ActionTypes> {
  type: ActionTypes.SET_TWEETS;
  payload: Tweet[];
}

export interface SetLoadingAction extends Action<ActionTypes> {
  type: ActionTypes.SET_LOADING;
  payload: LoadingState;
}

export interface FetchTweetsAction extends Action<ActionTypes> {
  type: ActionTypes.FETCH_TWEETS;
}

export interface FetchNewTweet extends Action<ActionTypes> {
  type: ActionTypes.FETCH_NEW_TWEET;
  payload: string;
}

export interface SetNewTweet extends Action<ActionTypes> {
  type: ActionTypes.SET_NEW_TWEET;
  payload: Tweet;
}

export interface SetAddNewTweetLoadState extends Action<ActionTypes> {
  type: ActionTypes.SET_NEW_TWEET_LOAD;
  payload: LoadNewTweetState;
}

export type TweetActions =
  | SetTweetAction
  | FetchTweetsAction
  | SetLoadingAction
  | FetchNewTweet
  | SetNewTweet
  | SetAddNewTweetLoadState;
