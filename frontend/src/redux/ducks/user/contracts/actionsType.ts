import { Action } from 'redux';
import { formData } from '../../../../pages/signIn/signModalComponents/LoginModal';
import { User } from '../../../types';
import { LoadingState, UserRegisterData } from './state';

export enum ActionTypes {
  SET_USER = 'tweet/actionTypes/setUser',
  FETCH_USER = 'tweet/actionTypes/fetchUser',
  SET_LOADING = 'tweet/actionTypes/setLoadingUser',
  REGISTER_USER = 'tweet/actionTypes/registerUser',
}

export interface SetUserAction extends Action<ActionTypes> {
  type: ActionTypes.SET_USER;
  payload: User;
}

export interface SetLoadUser extends Action<ActionTypes> {
  type: ActionTypes.SET_LOADING;
  payload: LoadingState;
}

export interface FetchUserAction extends Action<ActionTypes> {
  type: ActionTypes.FETCH_USER;
  payload: formData;
}

export interface RegisterNewUser extends Action<ActionTypes> {
  type: ActionTypes.REGISTER_USER;
  payload: UserRegisterData
}

export type UserActions = SetUserAction | FetchUserAction | RegisterNewUser | SetLoadUser;
