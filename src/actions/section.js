import { CURRENT_SECTION, SET_SECTION_REFS } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const currentSectionAction = createAction(CURRENT_SECTION);
export const setSectionRefsAction = createAction(SET_SECTION_REFS);

