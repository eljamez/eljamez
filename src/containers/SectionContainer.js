import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class SectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.scrolling = false
  }

  static propTypes = {
    currentSectionYAction: PropTypes.func.isRequired,
    currentSectionAction: PropTypes.func.isRequired,
    currentSection: PropTypes.object.isRequired,
  }

  /**
   * doing all of the checking to see if it's the current section
   */
  sectionSettings = () => {
    this.yPos = this.getYPos()
    this.isCurrent = this.isCurrentSection()
    //this.h2Pos = 0//(this.yPos - window.scrollY > 0 ) ? this.yPos - window.scrollY : 0;

    // this is no longer scrolling if section has changed
    if (this.props.currentSection.name !== this.sectionName) {
      console.log('scrolling?')
      this.scrolling = false
    }

    /*
    // scroll to section when nav is clicked
    if (this.props.currentSection.name === this.sectionName &&
      this.props.currentSection.navClicked &&
      !this.scrolling
    ) {
      console.log('scrolling when nav clicked')
      //this.props.currentSectionYAction(this.yPos);
      this.scrolling = true
      this.scrollToSection(this.yPos)
    }*/

    // when scrolling through, change section
    if (
      this.isCurrent &&
      this.props.currentSection.name !== this.sectionName &&
      !this.props.currentSection.navClicked
    ) {
      console.log('change section')
      this.props.currentSectionAction(this.sectionName)
    }

    /*
    //// navclicked is no more when section top and scrollY are the same
    if(window.scrollY === this.yPos && this.props.currentSection.navClicked){
      console.log('current section y position for ' + this.sectionName + " " + this.yPos)
      console.log('this should be in header?')
      this.props.sectionNavClickAction(false)
    }
    */
  }

  /**
   * handling the scroll, and checking all the good stuff
   */
  handleScroll = () => {
    this.sectionSettings()
  }

  /**
   * @returns {number} the current y position of the component
   */
  getYPos = () => {
    return Math.round(window.scrollY + ReactDOM.findDOMNode(this).getBoundingClientRect().top + 1)
  }

  /**
   * @returns {boolean} true if component is current section
   */
  isCurrentSection = () => {
    if (
      window.scrollY > this.yPos &&
      window.scrollY < this.yPos + ReactDOM.findDOMNode(this).getBoundingClientRect().height
    ) {
      return true
    }
    return false
  }

  /**
   * @param {number} toScrollPos the destination scroll position top of the component
   */
  scrollToSection = toScrollPos => {
    window.scrollTo({
      top: toScrollPos, // could be negative value
      left: 0,
      behavior: 'smooth',
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
    // add resizing
    /*
    let thisSectionName = this.sectionName;
    this.props.setTopAction({
      thisSectionName : ReactDOM.findDOMNode(this).getBoundingClientRect().top
    })*/
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
    // remove resizing
  }

  componentDidUpdate() {
    this.sectionSettings()
  }

  shouldComponentUpdate() {
    return false
  }
}

export default SectionContainer
