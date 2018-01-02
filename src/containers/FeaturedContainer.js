import React from 'react'
import PropTypes from 'prop-types'
import { Featured } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import * as FeaturedActions from 'actions/featured'

class FeaturedContainer extends React.Component {
  constructor(props) {
    super(props)
    //console.log(this.props)
  }

  static propTypes = {
    scrollPos: PropTypes.number.isRequired,
    currentSection: PropTypes.string.isRequired,
  }

  getYPos = (attr) => {
    //console.log('getting y');
    //console.log(ReactDOM.findDOMNode(this).getBoundingClientRect().top);
  }

  render() {
    return (
      <Featured scrollPos={this.props.scrollPos} getYPos={this.getYPos()}/>
    )
  }

  componentDidUpdate() {
    //console.log(ReactDOM.findDOMNode(this).getBoundingClientRect().top);
  }
}

// scroll position should always be updated? helper function for checking?


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
  return bindActionCreators(FeaturedActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedContainer)
