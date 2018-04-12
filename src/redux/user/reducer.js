import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} from './types'

const initialState = {
  fetching: false,
  data: null,
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, fetching: true, error: null }
    case FETCH_USER_SUCCESS:
      return { ...state, fetching: false, data: action.payload }
    case FETCH_USER_FAILURE:
      return { ...state, fetching: false, data: null, error: action.payload }
    default:
      return state
  }
}
