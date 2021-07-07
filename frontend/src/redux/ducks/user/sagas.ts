import { call, put, takeEvery } from 'redux-saga/effects';
import { authApi } from '../../../api/authApi';
import { User } from '../../types';
import { setUser, setUserLoading } from './actionCreators';
import { ActionTypes, FetchUserAction, RegisterNewUser } from './contracts/actionsType';
import { LoadingState } from './contracts/state';

function* fetchUser({ payload }: FetchUserAction) {
  try {
    const data: User = yield call(authApi.signIn, payload);
    localStorage.setItem("twToken", data.token || '')
    delete data.token
    yield put(setUser(data));
  } catch (e) {
    yield put(setUserLoading(LoadingState.ERROR));
  }
}

function* registerUser({ payload }: RegisterNewUser) {
  try {
    yield put(setUserLoading(LoadingState.LOADIND));
    yield call(authApi.register, payload);
    yield put(setUserLoading(LoadingState.LOADED));
  } catch (e) {
    yield put(setUserLoading(LoadingState.ERROR));
  }
}

export function* fetchUserSaga() {
  yield takeEvery(ActionTypes.FETCH_USER, fetchUser);
  yield takeEvery(ActionTypes.REGISTER_USER, registerUser);
}
