import { CURRENT_SECTION, CURRENT_SECTION_TOP, SET_SECTION_REFS } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const currentSectionAction = createAction(CURRENT_SECTION);
export const currentSectionTopAction = createAction(CURRENT_SECTION_TOP);
export const setSectionRefsAction = createAction(SET_SECTION_REFS);

