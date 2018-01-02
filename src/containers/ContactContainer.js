import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FeaturedActions from 'actions/featured'

class ContactContainer extends React.Component {
  static propTypes = {
    toggleShowing: PropTypes.func.isRequired,
  }

  toggleShowing = () => {
    this.props.toggleShowing();
  }

  render() {
    return (
      <Contact className="contact" toggleShowing={this.toggleShowing}/>
    )
  }
}

const mapStateToProps = createStructuredSelector({

})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FeaturedActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)
