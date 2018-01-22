import React from 'react'
import { About } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SectionActions from 'actions/section'
import { SectionContainer } from 'containers'

class AboutContainer extends SectionContainer {
  constructor(props) {
    super(props)
    this.sectionName = 'About'
  }

  render() {
    return (
      <About h2Pos={this.h2Pos}/>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentSection: createSelector(
    (state) => state.currentSection,
    (currentSectionState) => currentSectionState,
  ),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SectionActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)
