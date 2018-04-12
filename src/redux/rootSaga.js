import { takeEvery, all } from 'redux-saga/effects'

import { userTypes, userSagas } from './user'

export default function* rootSaga() {
  yield all([takeEvery(userTypes.FETCH_USER_REQUEST, userSagas.fetchUser)])
}
