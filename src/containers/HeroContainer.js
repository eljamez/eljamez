import React from 'react'
import PropTypes from 'prop-types'
import { Hero } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SectionActions from 'actions/section'
import { SectionContainer } from 'containers'

class HeroContainer extends SectionContainer {
  constructor(props) {
    super(props)
    this.sectionName = 'Hero'
  }

  render() {
    return (
      <Hero scrollPos={this.props.scrollPos}/>
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
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { ...SectionActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer)
