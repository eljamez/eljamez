import React from 'react'
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

  handleChange(values) {
    console.log(values)
  }

  handleUpdate(form) {
    console.log(form)
  }

  handleSubmit(values) {
    console.log('submit the form')
    console.log(values)
  }

  render() {
    return (
      <Contact
        h2Pos={this.h2Pos}
        handleChange={this.handleChange}
        handleUpdate={this.handleUpdate}
        handleSubmit={this.handleSubmit}
        renderExtra={this.renderExtra}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentSection: createSelector(state => state.currentSection, currentSectionState => currentSectionState),
  sectionTops: createSelector(state => state.sectionTops, sectionTopsState => sectionTopsState),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SectionActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)
