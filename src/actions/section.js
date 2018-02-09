import {
  CURRENT_SECTION,
  CURRENT_SECTION_TOP,
  SECTION_NAV_CLICK,
  CURRENT_SECTION_Y,
  SET_TOP,
} from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const currentSectionAction = createAction(CURRENT_SECTION)
export const currentSectionTopAction = createAction(CURRENT_SECTION_TOP)
export const currentSectionYAction = createAction(CURRENT_SECTION_Y)
export const sectionNavClickAction = createAction(SECTION_NAV_CLICK)
export const setTopAction = createAction(SET_TOP)
