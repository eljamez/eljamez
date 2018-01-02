import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants/ActionTypes'
import initialState from './initialState'

export default function counter(state = initialState.counter, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}
