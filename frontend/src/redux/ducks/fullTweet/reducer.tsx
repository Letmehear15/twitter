import produce, { Draft } from 'immer';
import { LoadingState, Tweet } from '../tweet/contracts/state';
import { FullTweetAction, TweetActionTypes } from './contracts/actionTypes';
import { TweetState } from './contracts/state';

const initialState = {
  tweet: undefined as Tweet | undefined,
  loadState: LoadingState.NEVER,
};

export const fullTweetReduce = produce(
  (draft: Draft<TweetState>, action: TweetActionTypes) => {
    switch (action.type) {
      case FullTweetAction.TWEET_SET_DATA: {
        draft.tweet = action.payload;
        draft.LoadingStatus = LoadingState.LOADED;
        break;
      }
      case FullTweetAction.TWEET_FETCH_DATA: {
        draft.tweet = undefined;
        draft.LoadingStatus = LoadingState.LOADIND;
        break;
      }
      case FullTweetAction.TWEET_SET_LOADING: {
        draft.LoadingStatus = action.payload;
        break;
      }
    }
  },
  initialState
);
