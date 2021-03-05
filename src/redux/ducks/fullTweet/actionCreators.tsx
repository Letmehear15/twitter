import { FullTweetAction, TweetFetchData, TweetSetLoad } from './contracts/actionTypes'
import { LoadingState } from "../tweet/contracts/state";
import { TweetSetData } from "./contracts/actionTypes";
import { TweetState } from './contracts/state';

export const setTweetData = (payload:TweetState['tweet']):TweetSetData => ({
    type: FullTweetAction.TWEET_SET_DATA,
    payload
})

export const fetchTweet = (payload: string): TweetFetchData => ({
    type:FullTweetAction.TWEET_FETCH_DATA,
    payload
})

export const setLoadTweet = (payload:LoadingState):TweetSetLoad => ({
    type: FullTweetAction.TWEET_SET_LOADING,
    payload
})