import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class SectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.scrolling = false
  }

  /**
   * @returns {number} the current y position of the component
   */
  getYPos = () => {
    return window.scrollY + ReactDOM.findDOMNode(this).getBoundingClientRect().top
  }

  /**
   * @returns {boolean} true if component is current section
   */
  isCurrentSection = () => {
    if (
      window.scrollY > this.yPos &&
      window.scrollY < this.yPos + ReactDOM.findDOMNode(this).getBoundingClientRect().height) {
        return true;
    }
    return false;
  }

  /**
   * @param {number} toScrollPos the destination scroll position top of the component
   */
  scrollToSection = (toScrollPos) => {
    window.scrollTo({ 
      top: toScrollPos, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
  }

  static propTypes = {
    currentSection: PropTypes.object.isRequired,
  }

  componentDidUpdate() {
    this.yPos = this.getYPos()
    this.isCurrent = this.isCurrentSection()

    // this is no longer scrolling if section has changed 
    if (this.props.currentSection.name !== this.sectionName) {
      this.scrolling = false
    }

    // scroll to section when nav is clicked
    if (this.props.currentSection.name === this.sectionName &&
      this.props.currentSection.navClicked &&
      !this.scrolling
    ) {
      this.scrolling = true
      this.scrollToSection(this.yPos)
    }

    // reset the params to click can happen again.


    /*
    // if clicked from nav, scroll to top
    if (this.props.currentSection.name === this.sectionName &&
      !this.props.currentSection.isTop &&
      !this.scrolling &&
      this.props.currentSection.navClicked
    ) {
      this.scrolling = true
      
      scrollToSection(this.yPos)
      return
    }

    // if we have left the area, scrolling is false for sure.
    if (!this.isCurrent) {
      this.scrolling = false
    }
    
    // if we are withing the params of the section, set to that section, as long as it wasn't a nav click
    if (this.isCurrent &&
      this.props.currentSection.name !== this.sectionName &&
      !this.props.currentSection.navClicked
    ) {
      //this.props.sectionNavClickAction(false)
      this.props.currentSectionAction(this.sectionName)
    }

    // scroll to that section if we are not at the top and are not currently scrolling
    if (this.props.currentSection.name === this.sectionName && !this.props.currentSection.isTop && !this.scrolling) {
      this.scrolling = true
      scrollToSection(this.yPos)
    }

    // once at top, set state
    if (this.yPos === window.scrollY && !this.props.currentSection.isTop) {
      this.props.currentSectionTopAction(true)
    }

    // always must reset the navclicked to false
    if (this.props.currentSection.navClicked &&
        !this.scrolling
    ) {
      this.props.sectionNavClickAction(false)
    } 


    // once we leave the top, we are not scrolling
    //if (this.yPos !== window.scrollY && this.props.currentSectionTop && this.scrolling) {
      //this.scrolling = false;
      //this.props.currentSectionTopAction(false)
    //}
    */
  }
}

export default SectionContainer
