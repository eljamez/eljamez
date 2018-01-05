import { combineReducers } from 'redux'
import header from './header'
import scrollPos from './scrollPos'
import currentSection from './currentSection'


const rootReducer = combineReducers({
  scrollPos,
  header,
  currentSection,
})

export default rootReducer
