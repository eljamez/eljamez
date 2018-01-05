import { CURRENT_SECTION, CURRENT_SECTION_TOP, CURRENT_SECTION_Y, SECTION_NAV_CLICK } from 'constants/ActionTypes'
import initialState from './initialState'

export default function counter(state = initialState.currentSection, action) {
  let newState = {};
  switch (action.type) {
    case CURRENT_SECTION:   
      newState = {...state, name: action.payload}
      return newState;
    case CURRENT_SECTION_TOP:
      newState = {...state, isTop: action.payload}
      return newState;
    case CURRENT_SECTION_Y:
      newState = {...state, yPos: action.payload}
      return newState
    case SECTION_NAV_CLICK:
      newState = {...state, navClicked: action.payload}
      return newState;
    default:
      return state
  }
}
