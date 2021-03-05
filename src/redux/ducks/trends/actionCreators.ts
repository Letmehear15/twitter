import { LoadingState } from "../tweet/contracts/state";
import { FetchTrends, SetLoad, SetTrends, TrendActions } from "./contracts/actionTypes";
import { Trends } from "./contracts/state";

export const fetchTrends = ():FetchTrends => ({
    type:TrendActions.FETCH_TRENDS
})

export const setTrends = (payload:Trends[]):SetTrends => ({
    type: TrendActions.SET_TRENDS,
    payload
})

export const setLoad = (payload:LoadingState):SetLoad => ({
    type: TrendActions.SET_LOADING,
    payload
})