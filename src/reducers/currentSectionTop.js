import { CURRENT_SECTION_TOP } from 'constants/ActionTypes'
import initialState from './initialState'

export default function counter(state = initialState.currentSectionTop, action) {
  switch (action.type) {
    case CURRENT_SECTION_TOP:  
      return action.payload;
    default:
      return state
  }
}