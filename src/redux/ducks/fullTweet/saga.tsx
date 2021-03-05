import { call, put, takeLatest } from "redux-saga/effects";
import { fullTweetApi } from "../../../api/fullTweetApi";
import { LoadingState, Tweet } from "../tweet/contracts/state";
import { setLoadTweet, setTweetData } from "./actionCreators";
import { FullTweetAction, TweetFetchData } from "./contracts/actionTypes";

function* fetchFullTweet ( {payload}: TweetFetchData ) {
    try {
        const data:Tweet[] = yield call(fullTweetApi.fetchFullTweet, payload)
        yield put(setTweetData(data[0]))
    } catch {
        put(setLoadTweet(LoadingState.ERROR))
    }
}

export function* watchFullTweet () {
    yield takeLatest(FullTweetAction.TWEET_FETCH_DATA, fetchFullTweet)
}