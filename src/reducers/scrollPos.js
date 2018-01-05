import { SCROLL_POS } from 'constants/ActionTypes'
import initialState from './initialState'

export default function counter(state = initialState.scrollPos, action) {
  switch (action.type) {
    case SCROLL_POS:
      return action.payload;
    default:
      return state
  }
}
