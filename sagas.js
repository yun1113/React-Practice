import axios from 'axios';
import Router from 'next/router';
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { 
  actionTypes,
  loginSuccess,
  loginFail,
} from './actions'

export function* loginSaga({ email, password }) {
  try {
    const res = yield axios({
      url: 'http://0.0.0.0:8080/v1/linc_portal/health_liveness',
      method: 'get',
    });
    yield put(loginSuccess(email))
    yield call(Router.push, '/user');
  } catch (err) {
    yield put(loginFail(err))
  }
}
export default function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN, loginSaga)
  ])
}
