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
      <Hero/>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentSection: createSelector(
    (state) => state.currentSection,
    (currentSectionState) => currentSectionState,
  ),
  currentSectionTop: createSelector(
    (state) => state.currentSectionTop,
    (currentSectionTopState) => currentSectionTopState,
  ),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SectionActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer)
