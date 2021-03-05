export enum LoadingState {
    LOADIND = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export enum LoadNewTweet {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Tweet {
    user: {
        fullName: string
        nickName: string
        avatarUrl: string
    },
    _id: string
    messageText: string
}

export interface TweetsState {
    item: Tweet[]
    LoadingStatus: LoadingState
    LoadNewTweet: LoadNewTweet
}