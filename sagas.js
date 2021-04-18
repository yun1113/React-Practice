import { all, put, takeLatest } from 'redux-saga/effects'

import { 
  actionTypes,
  loginSuccess,
  loginFail,
} from './actions'

export function* loginSaga({ email, password }) {
  try {
    yield put(loginSuccess(email))
  } catch (err) {
    yield put(loginFail(err))
  }
}
export default function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN, loginSaga)
  ])
}
