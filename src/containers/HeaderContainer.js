import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ScrollActions from 'actions/scroll'
import * as SectionActions from 'actions/section'

class HeaderContainer extends React.Component {

  static propTypes = {
    scrollPos: PropTypes.number.isRequired,
  }

  handleNavClick = (newSection) => {
    this.props.currentSectionAction(newSection);
    //let element = document.getElementsByClassName(newSection)[0];
    //let rect = element.getBoundingClientRect();
    //console.log(rect.top, rect.right, rect.bottom, rect.left);
    console.log('handle nav click')
    console.log(this.props.sectionRefs[newSection.toLowerCase()].getBoundingClientRect().top)

    let newY = this.props.sectionRefs[newSection.toLowerCase()].getBoundingClientRect().top

    console.log(this.props.scrollPos);
    console.log(newY);

    window.scroll({ 
      top: newY, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
  }

  handleNavPosition = () => {
    //console.log('in handle nav pos '+this.props.currentSection);
    //const element = document.getElementById(this.props.currentSection);
    //console.log(element);
  }

  render() {
    return (
      <Header
        scrollPos={this.props.scrollPos}
        handleNavClick={this.handleNavClick}
        handleNavPosition={this.handleNavPosition()}
        currentSection={this.props.currentSection}/>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  scrollPos: createSelector(
    (state) => state.scrollPos,
    (scrollPosState) => scrollPosState,
  ),
  currentSection: createSelector(
    (state) => state.currentSection,
    (currentSectionState) => currentSectionState,
  ),
  sectionRefs: createSelector(
    (state) => state.sectionRefs,
    (sectionRefsState) => sectionRefsState,
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...ScrollActions, ...SectionActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)