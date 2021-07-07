import { call, put, takeEvery } from 'redux-saga/effects';
import { tweetApi } from '../../../api/tweetsApi';
import {
  setNewTweet,
  setNewTweetLoad,
  setTweetLoading,
  setTweets,
} from './actionCreators';
import { ActionTypes, FetchNewTweet } from './contracts/actionsType';
import { LoadingState, LoadNewTweetState, Tweet } from './contracts/state';

function* fetchTweets() {
  try {
    const data: Tweet[] = yield call(tweetApi.getTweets);
    yield put(setTweets(data));
  } catch (e) {
    yield put(setTweetLoading(LoadingState.ERROR));
  }
}

function* fetchAddNewTweet({ payload: text }: FetchNewTweet) {
  try {
    yield put(setNewTweetLoad(LoadNewTweetState.LOADING));
    const item: Tweet = yield call(tweetApi.addTweet, text);
    yield put(setNewTweet(item));
  } catch (e) {
    yield put(setNewTweetLoad(LoadNewTweetState.ERROR));
  }
}

export function* getTweetsSaga() {
  yield takeEvery(ActionTypes.FETCH_TWEETS, fetchTweets);
  yield takeEvery(ActionTypes.FETCH_NEW_TWEET, fetchAddNewTweet);
}
