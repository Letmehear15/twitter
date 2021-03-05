import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetApi } from '../../../api/tweetsApi';
import { setTweetLoading, setTweets } from './actionCreators';
import { ActionTypes, SetNewTweet } from './contracts/actionsType';
import { LoadingState, Tweet } from './contracts/state';

function* fetchTweets() {
   try {
      const data: Tweet[] = yield call(tweetApi.getTweets);
      yield put(setTweets(data));
   } catch (e) {
      yield put(setTweetLoading(LoadingState.ERROR))
   }
}

function* fetchAddNewTweet ({messageText}: SetNewTweet) {
   try {
      const tweet:Tweet = {
         _id: '123',
         messageText,
         user: {
            fullName: 'test full name',
            avatarUrl: 'https://source.unsplash.com/random/100x100?4',
            nickName: 'Alexxxxxx'
         }
      }
      yield call(tweetApi.addTweet, tweet)
   } catch(e) {

   }
}

export function* getTweetsSaga() {
  yield takeEvery(ActionTypes.FETCH_TWEETS, fetchTweets);
  yield takeEvery(ActionTypes.SET_NEW_TWEET, fetchAddNewTweet)
}