import { SET_TOP } from 'constants/ActionTypes'
import initialState from './initialState'

export default function counter(state = initialState.sectionTops, action) {
  let newState
  switch (action.type) {
    case SET_TOP:
      console.log(action)
      //if(state.key)
      //newState = {...state, {}}
      return action.payload
    default:
      return state
  }
}
