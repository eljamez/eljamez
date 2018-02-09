import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SectionActions from 'actions/section'

class HeaderContainer extends React.Component {
  static propTypes = {
    currentSectionAction: PropTypes.func.isRequired,
    sectionNavClickAction: PropTypes.func.isRequired,
    currentSection: PropTypes.object.isRequired,
  }

  handleScroll = () => {
    this.forceUpdate()
  }

  handleNavClick = (newSection, newY) => {
    //this.props.currentSectionAction(newSection)
    //this.props.sectionNavClickAction(true)
    console.log('scrlling to ' + this.props.sectionTops[newSection] + ' for ' + newSection)
    window.scrollTo({
      top: this.props.sectionTops[newSection] + 10,
      left: 0,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <Header
        scrollPos={window.scrollY}
        handleNavClick={this.handleNavClick}
        currentSection={this.props.currentSection.name}
      />
    )
  }

  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
    // add resizing
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
    // remove resizing
  }
}

const mapStateToProps = createStructuredSelector({
  currentSection: createSelector(state => state.currentSection, currentSectionState => currentSectionState),
  sectionTops: createSelector(state => state.sectionTops, sectionTopsState => sectionTopsState),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...SectionActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
