import { combineReducers } from 'redux'
import header from './header'
import scrollPos from './scrollPos'
import sectionRefs from './sectionRefs'
import currentSection from './currentSection'
import currentSectionTop from './currentSectionTop'


const rootReducer = combineReducers({
  sectionRefs,
  scrollPos,
  header,
  currentSection,
  currentSectionTop,
})

export default rootReducer
