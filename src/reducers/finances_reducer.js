import { FETCH_PAYMENTS, FETCH_BILLS } from '../actions/types'

const INITIAL_STATE = {
  payments: [],
  bills: []
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PAYMENTS:
      return Object.assign({}, state, { payments: action.payload.data })
    case FETCH_BILLS:
      return Object.assign({}, state, { bills: action.payload.data })
    default:
      return state
  }
}