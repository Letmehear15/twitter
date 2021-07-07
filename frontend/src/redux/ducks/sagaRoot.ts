import { all } from "redux-saga/effects";
import { watchFullTweet } from "./fullTweet/saga";
import { getTrendsSaga } from "./trends/sagas";
import { getTweetsSaga } from "./tweet/sagas";
import { fetchUserSaga } from "./user/sagas";

export function* sagaRoot() {
    yield all([
        getTweetsSaga(),
        getTrendsSaga(),
        watchFullTweet(),
        fetchUserSaga()
    ])
}