import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Header } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SectionActions from 'actions/section'

class HeaderContainer extends React.Component {

  handleNavClick = (newSection, newY) => {
    this.props.currentSectionAction(newSection)
    this.props.sectionNavClickAction(true)
  }

  render() {
    return (
      <Header
        scrollPos={this.props.scrollPos}
        handleNavClick={this.handleNavClick}
        currentSection={this.props.currentSection.name}
      />
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
  return bindActionCreators({ ...SectionActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)