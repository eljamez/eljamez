import React from 'react'
import PropTypes from 'prop-types'
import { scrollToSection, getYPos, isCurrentSection } from 'constants/helpers'

class SectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.scrolling = false
  }

  static propTypes = {
    currentSection: PropTypes.string.isRequired,
  }

  componentDidUpdate() {
    this.yPos = getYPos(this)
    this.isCurrent = isCurrentSection(this)
    console.log(this.sectionName);

    // if we have left the area, scrolling is false for sure.
    if (!this.isCurrent) {
      this.scrolling = false
    }
    
    // if we are withing the params of the section, set to that section
    if (this.isCurrent && this.props.currentSection !== this.sectionName) {
      this.props.currentSectionAction(this.sectionName)
    }

    // scroll to that section if we are not at the top and are not currently scrolling
    if (this.props.currentSection === this.sectionName && !this.props.currentSectionTop && !this.scrolling) {
      this.scrolling = true;
      scrollToSection(this.yPos)
    }

    // once at top, set state
    if (this.yPos === window.scrollY && !this.props.currentSectionTop) {
      this.props.currentSectionTopAction(true)
    }


    // once we leave the top, we are not scrolling
    //if (this.yPos !== window.scrollY && this.props.currentSectionTop && this.scrolling) {
      //this.scrolling = false;
      //this.props.currentSectionTopAction(false)
    //}
  }
}

export default SectionContainer
