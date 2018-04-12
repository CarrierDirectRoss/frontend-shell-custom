import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} from './types'

export function fetchUser() {
  return {
    type: FETCH_USER_REQUEST,
  }
}

export function setUser(user) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  }
}

export function fetchError(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  }
}
