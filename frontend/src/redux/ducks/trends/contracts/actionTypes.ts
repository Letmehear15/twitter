import { Action } from "redux";
import { LoadingState } from "../../tweet/contracts/state";
import { Trends } from "./state";

export enum TrendActions {
    FETCH_TRENDS = 'trends/actionTypes/fetchTrends',
    SET_TRENDS = 'trends/actionTypes/setTrends',
    SET_LOADING = 'trends/actionTypes/setLoading'
}

export interface SetTrends extends Action<TrendActions> {
    type: TrendActions.SET_TRENDS,
    payload: Trends[]
}

export interface FetchTrends extends Action<TrendActions> {
    type: TrendActions.FETCH_TRENDS
}

export interface SetLoad extends Action<TrendActions> {
    type: TrendActions.SET_LOADING
    payload: LoadingState
}


export type ActionTrends = SetTrends | FetchTrends | SetLoad