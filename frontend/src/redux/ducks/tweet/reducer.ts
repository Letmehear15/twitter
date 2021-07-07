import produce, { Draft } from 'immer';
import { ActionTypes, TweetActions } from './contracts/actionsType';
import {
  LoadingState,
  LoadNewTweetState,
  TweetsState,
} from './contracts/state';

const initialTweetState = {
  item: [],
  LoadingStatus: LoadingState.NEVER,
  LoadNewTweet: LoadNewTweetState.NEVER,
};

export const tweetReducer = produce(
  (draft: Draft<TweetsState>, action: TweetActions) => {
    switch (action.type) {
      case ActionTypes.SET_TWEETS: {
        draft.item = action.payload;
        draft.LoadingStatus = LoadingState.LOADED;
        break;
      }
      case ActionTypes.FETCH_TWEETS: {
        draft.LoadingStatus = LoadingState.LOADIND;
        draft.item = [];
        break;
      }
      case ActionTypes.SET_LOADING: {
        draft.LoadingStatus = action.payload;
        break;
      }
      case ActionTypes.SET_NEW_TWEET: {
        draft.item.unshift(action.payload);
        draft.LoadNewTweet = LoadNewTweetState.NEVER;
        break;
      }
      case ActionTypes.SET_NEW_TWEET_LOAD: {
        draft.LoadNewTweet = action.payload;
        break;
      }
    }
  },
  initialTweetState
);
