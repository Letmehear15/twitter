import produce, { Draft } from 'immer'
import { ActionTypes, TweetActions } from './contracts/actionsType'
import { LoadingState, TweetsState } from './contracts/state'

const initialTweetState = {
    item: [],
    LoadingStatus: LoadingState.NEVER
}

export const tweetReducer = produce((draft:Draft<TweetsState>, action:TweetActions) => {
    switch(action.type) {
        case ActionTypes.SET_TWEETS: {
            draft.item = action.payload
            draft.LoadingStatus = LoadingState.LOADED
            break;
        }
        case ActionTypes.FETCH_TWEETS: {
            draft.LoadingStatus = LoadingState.LOADIND
            draft.item = []
            break;
        }
        case ActionTypes.SET_LOADING: {
            draft.LoadingStatus = action.payload
        }
    }
}, initialTweetState)