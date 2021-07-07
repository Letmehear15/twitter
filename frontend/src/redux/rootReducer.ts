import {applyMiddleware, compose, createStore} from 'redux'
import { combineReducers } from 'redux'
import { tweetReducer } from './ducks/tweet/reducer'
import createSagaMiddleware from 'redux-saga'
import { sagaRoot } from './ducks/sagaRoot'
import { TweetsState } from './ducks/tweet/contracts/state'
import { trendsReducer } from './ducks/trends/reducer'
import { TrendsState } from './ducks/trends/contracts/state'
import { fullTweetReduce } from './ducks/fullTweet/reducer'
import { TweetState } from './ducks/fullTweet/contracts/state'
import { userReducer } from './ducks/user/reducer'
import { UserState } from './ducks/user/contracts/state'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    tweet: tweetReducer,
    trends: trendsReducer,
    fullTweet: fullTweetReduce,
    user: userReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagaRoot)

export interface RootState {
    tweet: TweetsState,
    trends: TrendsState,
    fullTweet: TweetState,
    user: UserState
}