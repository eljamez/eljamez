import { combineReducers } from 'redux'
import header from './header'
import scrollPos from './scrollPos'
import sectionRefs from './sectionRefs'
import currentSection from './currentSection'


const rootReducer = combineReducers({
  sectionRefs,
  scrollPos,
  header,
  currentSection,
})

export default rootReducer
