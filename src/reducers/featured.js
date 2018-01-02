import { TOGGLE_SHOWING } from 'constants/ActionTypes'
import initialState from './initialState'

export default function counter(state = initialState.featured, action) {
  //let newState = {};
  switch (action.type) {
    case TOGGLE_SHOWING:
      //const isShowing = state.isShowing === 'isShowing' ? 'isHidden' : 'isShowing';
      //newState = {...state, isShowing : isShowing}
      return state;
    default:
      return state
  }
}
