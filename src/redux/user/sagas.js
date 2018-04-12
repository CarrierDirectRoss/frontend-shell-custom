import { call, put } from 'redux-saga/effects'

import { fakeFetchUser } from 'Src/api/userApi'
import * as userActions from './actions'

// worker saga: makes the api call when watcher saga sees the action
export function* fetchUser() {
  try {
    const response = yield call(fakeFetchUser)

    // dispatch a success action to the store with the new dog
    yield put(userActions.setUser(response))
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(userActions.fetchError(error))
  }
}
