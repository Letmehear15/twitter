import { Action } from "redux";
import { LoadingState, Tweet } from "./state";

export enum ActionTypes {
    SET_TWEETS = 'tweet/actionTypes/setTweets',
    FETCH_TWEETS = 'tweet/actionTypes/fetchTweets',
    SET_LOADING = 'tweet/actionTypes/setLoading',
    SET_NEW_TWEET = 'tweet/actionTypes/setNewTweet'
}


export interface SetTweetAction extends Action<ActionTypes> {
    type: ActionTypes.SET_TWEETS
    payload: Tweet[]
}

export interface SetLoadingAction extends Action<ActionTypes> {
    type: ActionTypes.SET_LOADING
    payload: LoadingState
}


export interface FetchTweetsAction extends Action<ActionTypes> {
    type: ActionTypes.FETCH_TWEETS
}

export interface SetNewTweet extends Action<ActionTypes> {
    type: ActionTypes.SET_NEW_TWEET,
    messageText: string
}


export type TweetActions = SetTweetAction | FetchTweetsAction | SetLoadingAction