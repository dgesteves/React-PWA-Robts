import {takeEvery, call, put} from 'redux-saga/effects';

import {FETCH_ROBOTS_START} from '../types';
import {fetchRobotsFailure, fetchRobotsSuccess} from '../actions';
import fetchRobots from '../../api';

function* fetchRobotsAsync() {
  try {
    const res = yield call(fetchRobots);
    yield put(fetchRobotsSuccess(res.data));

  } catch (e) {
    yield put(fetchRobotsFailure(e));
  }
}

export function* onFetchRobotsStart() {
  yield takeEvery(FETCH_ROBOTS_START, fetchRobotsAsync);
}
