import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SectionActions from 'actions/section'
import { SectionContainer } from 'containers'

class ContactContainer extends SectionContainer {
  constructor(props) {
    super(props)
    this.sectionName = 'Contact'
  }

  render() {
    return (
      <Contact className="contact" toggleShowing={this.toggleShowing}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)
