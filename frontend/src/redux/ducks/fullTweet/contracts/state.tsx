import { LoadingState, Tweet } from "../../tweet/contracts/state";

export interface TweetState {
    tweet?: Tweet,
    LoadingStatus: LoadingState
}