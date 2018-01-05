import React from 'react'
import PropTypes from 'prop-types'
import { Featured } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SectionActions from 'actions/section'
import { SectionContainer } from 'containers'

class FeaturedContainer extends SectionContainer {
  constructor(props) {
    super(props)
    this.sectionName = 'Featured'
  }

  render() {
    return (
      <Featured handleResize={this.props.handleResize}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedContainer)
