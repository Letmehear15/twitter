import { ActionTypes, FetchTweetsAction, SetLoadingAction, SetNewTweet, SetTweetAction } from "./contracts/actionsType";
import { LoadingState, Tweet } from "./contracts/state";

export const setTweets = (payload:Tweet[]):SetTweetAction => ({
    type: ActionTypes.SET_TWEETS,
    payload
})

export const fetchTweets = ():FetchTweetsAction => ({
    type:ActionTypes.FETCH_TWEETS
})

export const setTweetLoading = (payload: LoadingState):SetLoadingAction => ({
    type:ActionTypes.SET_LOADING,
    payload
})

export const setNewTweet = (messageText: string):SetNewTweet => ({
    type: ActionTypes.SET_NEW_TWEET,
    messageText
})
