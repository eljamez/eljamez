import { SET_SECTION_REFS } from 'constants/ActionTypes'
import initialState from './initialState'

export default function counter(state = initialState.sectionRefs, action) {
  switch (action.type) {
    case SET_SECTION_REFS:      
      return action.payload;
    default:
      return state
  }
}
