import { RootState } from '../../rootReducer'
import { LoadingState, Tweet, TweetsState } from './contracts/state'

const selectStateTweets = (state:RootState):TweetsState => state.tweet

export const selectTweets = (state:RootState):Tweet[] => selectStateTweets(state).item

const selectStateLoading = (state:RootState):LoadingState => state.tweet.LoadingStatus

export const selectLoading = (state:RootState):boolean => selectStateLoading(state) === LoadingState.LOADIND
