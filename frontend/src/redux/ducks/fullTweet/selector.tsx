import { RootState } from "../../rootReducer";
import { LoadingState, Tweet } from "../tweet/contracts/state";
import { TweetState } from "./contracts/state";

const selectStateFullTweet = (state: RootState): TweetState => state.fullTweet
export const selectFullTweet = (state: RootState): Tweet | undefined => selectStateFullTweet(state).tweet

const selectLoadingState = (state: RootState): LoadingState => state.fullTweet.LoadingStatus
export const loadingTweet = (state: RootState):boolean => selectLoadingState(state) === LoadingState.LOADIND
