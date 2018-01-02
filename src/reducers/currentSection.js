import { CURRENT_SECTION } from 'constants/ActionTypes'
import initialState from './initialState'

export default function counter(state = initialState.currentSection, action) {
  switch (action.type) {
    case CURRENT_SECTION:      
      return action.payload;
    default:
      return state
  }
}
