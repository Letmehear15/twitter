import produce, { Draft } from 'immer';
import { User } from '../../types';
import { ActionTypes, UserActions } from './contracts/actionsType';
import {
  LoadingState,
  UserState,
} from './contracts/state';

const initialUserState = {
  item: null as User | null,
  LoadingStatus: LoadingState.NEVER,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
      case ActionTypes.FETCH_USER: {
        draft.item = null;
        draft.LoadingStatus = LoadingState.LOADIND;
        break;
      }
      case ActionTypes.SET_USER: {
        draft.item = action.payload;
        draft.LoadingStatus = LoadingState.LOADED;
        break;
      }
      case ActionTypes.SET_LOADING: {
        draft.LoadingStatus = action.payload
      }
    }
  },
  initialUserState
);
