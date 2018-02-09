import React from 'react'
import { Other } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SectionActions from 'actions/section'
import { SectionContainer } from 'containers'

class OtherContainer extends SectionContainer {
  constructor(props) {
    super(props)
    this.sectionName = 'Other'
  }

  render() {
    return <Other handleResize={this.props.handleResize} h2Pos={this.h2Pos} />
  }
}

const mapStateToProps = createStructuredSelector({
  currentSection: createSelector(state => state.currentSection, currentSectionState => currentSectionState),
  sectionTops: createSelector(state => state.sectionTops, sectionTopsState => sectionTopsState),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SectionActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherContainer)
