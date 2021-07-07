import { formData } from '../../../pages/signIn/signModalComponents/LoginModal';
import { User } from '../../types';
import {
  ActionTypes,
  FetchUserAction,
  RegisterNewUser,
  SetUserAction,
} from './contracts/actionsType';
import { LoadingState, UserRegisterData } from './contracts/state';

export const setUser = (payload: User): SetUserAction => ({
  type: ActionTypes.SET_USER,
  payload,
});

export const setUserLoading = (payload: LoadingState) => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

export const fetchUser = (payload: formData): FetchUserAction => ({
  type: ActionTypes.FETCH_USER,
  payload,
});

export const registerUser = (payload: UserRegisterData): RegisterNewUser => ({
  type: ActionTypes.REGISTER_USER,
  payload
});
