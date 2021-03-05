import { RootState } from "../../rootReducer";
import { Trends } from "./contracts/state";

export const selectTrends = (state:RootState):Trends[] => {
    return state.trends.items
}