import produce, { Draft } from "immer"
import { LoadingState } from "../tweet/contracts/state"
import { ActionTrends, TrendActions } from "./contracts/actionTypes"
import { TrendsState } from "./contracts/state"

const initialTrendsState = {
    items: [],
    loadState: LoadingState.NEVER
}

export const trendsReducer = produce((draft:Draft<TrendsState>, action:ActionTrends) => {
    switch (action.type) {
        case TrendActions.SET_TRENDS: {
            draft.items = action.payload
            draft.loadState = LoadingState.LOADED
            break;
        }
        case TrendActions.FETCH_TRENDS: {
            draft.loadState = LoadingState.LOADIND
            break;
        }
        case TrendActions.SET_LOADING: {
            draft.loadState = action.payload
            break;
        }
    }
}, initialTrendsState)