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
      this.props.currentSectionYAction(this.yPos);
      this.scrolling = true
      this.scrollToSection(this.yPos)
    }

    // when scrolling through, change section
    if (this.isCurrent &&
      this.props.currentSection.name !== this.sectionName &&
      !this.props.currentSection.navClicked
    ) {
      this.props.currentSectionAction(this.sectionName)
    }
  }
}

export default SectionContainer
