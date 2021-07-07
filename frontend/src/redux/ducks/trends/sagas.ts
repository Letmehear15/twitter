import { call, put, takeEvery } from 'redux-saga/effects'
import { trendsAPI } from '../../../api/trendsApi'
import { LoadingState } from '../tweet/contracts/state';
import { setLoad, setTrends } from './actionCreators';
import { TrendActions } from './contracts/actionTypes';

function* fetchTrends() {
    try {
        const data = yield call(trendsAPI.fetchTrends);
        yield put(setTrends(data))
    } catch (error) {
        yield put(setLoad(LoadingState.ERROR))
    }
}
export function* getTrendsSaga() {
    yield takeEvery(TrendActions.FETCH_TRENDS, fetchTrends)
}