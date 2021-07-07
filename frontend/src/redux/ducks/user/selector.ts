import { RootState } from '../../rootReducer'
import { LoadingState, UserState } from './contracts/state'

const selectStateUser = (state:RootState):UserState => state.user

export const selectIsAuth = (state: RootState): boolean => !!selectStateUser(state).item

export const selectLoading = (state:RootState): boolean => selectStateUser(state).LoadingStatus === LoadingState.LOADIND
export const selectError = (state: RootState): boolean => selectStateUser(state).LoadingStatus === LoadingState.ERROR
export const selectLoaded = (state: RootState): boolean => selectStateUser(state).LoadingStatus === LoadingState.LOADED