import { CURRENT_SECTION, CURRENT_SECTION_TOP, SECTION_NAV_CLICK, CURRENT_SECTION_Y } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const currentSectionAction = createAction(CURRENT_SECTION)
export const currentSectionTopAction = createAction(CURRENT_SECTION_TOP)
export const currentSectionYAction = createAction(CURRENT_SECTION_Y)
export const sectionNavClickAction = createAction(SECTION_NAV_CLICK)

