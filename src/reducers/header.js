import { SCROLL_POS } from 'constants/ActionTypes'
import initialState from './initialState'

export default function counter(state = initialState, action) {
  switch (action.type) {
    case SCROLL_POS:
      return state
    default:
      return state
  }
}
