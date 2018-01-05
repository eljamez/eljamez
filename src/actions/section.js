import { CURRENT_SECTION, CURRENT_SECTION_TOP, SECTION_NAV_CLICK } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const currentSectionAction = createAction(CURRENT_SECTION)
export const currentSectionTopAction = createAction(CURRENT_SECTION_TOP)
export const sectionNavClickAction = createAction(SECTION_NAV_CLICK)

