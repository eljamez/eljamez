import { combineReducers } from 'redux'
import header from './header'
import scrollPos from './scrollPos'
import currentSection from './currentSection'
import sectionTops from './sectionTops'

const rootReducer = combineReducers({
  scrollPos,
  header,
  currentSection,
  sectionTops,
})

export default rootReducer
