import React from 'react'
import { Hero } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FeaturedActions from 'actions/featured'

class HeroContainer extends React.Component {

  toggleShowing = () => {
    this.props.toggleShowing();
  }

  render() {
    return (
      <Hero/>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FeaturedActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer)
