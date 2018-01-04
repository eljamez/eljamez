// Just some helper functions that will be useful throughout
import ReactDOM from 'react-dom'


// scroll to the new position.
export const scrollToSection = (toScrollPos) => {
  window.scrollTo({ 
    top: toScrollPos, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
}

// getting the y position of the element
export const getYPos = (el) => {
  return window.scrollY + ReactDOM.findDOMNode(el).getBoundingClientRect().top
}

// check to see if it's the current section
export const isCurrentSection = (thisSection) => {
  if (
    window.scrollY > thisSection.yPos &&
    window.scrollY < thisSection.yPos + ReactDOM.findDOMNode(thisSection).getBoundingClientRect().height) {
      return true;
  }
  return false;
}