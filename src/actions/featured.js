import { TOGGLE_SHOWING } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const toggleShowing = createAction(TOGGLE_SHOWING)

/*

export const decrement = createAction(DECREMENT_COUNTER)

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}
*/
