import { call, put, takeLatest } from 'redux-saga/effects';
import { fullTweetApi } from '../../../api/fullTweetApi';
import { LoadingState, Tweet } from '../tweet/contracts/state';
import { setLoadTweet, setTweetData } from './actionCreators';
import { FullTweetAction, TweetFetchData } from './contracts/actionTypes';

function* fetchFullTweet({ payload: id }: TweetFetchData) {
  try {
    const data: Tweet = yield call(fullTweetApi.fetchFullTweet, id);
    yield put(setTweetData(data));
  } catch {
    put(setLoadTweet(LoadingState.ERROR));
  }
}

export function* watchFullTweet() {
  yield takeLatest(FullTweetAction.TWEET_FETCH_DATA, fetchFullTweet);
}
