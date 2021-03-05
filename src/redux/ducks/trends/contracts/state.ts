import { LoadingState } from "../../tweet/contracts/state";

export interface Trends {
    _id: string,
    tag: string,
    head: string    
}


export interface TrendsState {
    items: Trends[],
    loadState: LoadingState
}