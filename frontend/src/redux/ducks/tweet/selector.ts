import { RootState } from '../../rootReducer'
import { LoadingState, LoadNewTweetState, Tweet, TweetsState } from './contracts/state'

const selectStateTweets = (state:RootState):TweetsState => state.tweet

export const selectTweets = (state:RootState):Tweet[] => selectStateTweets(state).item

const selectStateLoading = (state:RootState):LoadingState => state.tweet.LoadingStatus

export const selectLoading = (state:RootState):boolean => selectStateLoading(state) === LoadingState.LOADIND

const selectStateTweetLoading = (state: RootState):LoadNewTweetState => state.tweet.LoadNewTweet

export const selectLoadingTweet = (state: RootState): boolean => selectStateTweetLoading(state) === LoadNewTweetState.LOADING
export const selectErrorTweet = (state: RootState): boolean => selectStateTweetLoading(state) === LoadNewTweetState.ERROR
