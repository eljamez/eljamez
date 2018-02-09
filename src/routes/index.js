import React from 'react'
import ReactDOM from 'react-dom'
import { HeaderContainer, AboutContainer, WorkContainer, ContactContainer, OtherContainer } from 'containers'
import { Extra } from 'components'
import { Footer } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as SectionActions from 'actions/section'

import styled from 'styled-components'

const Container = styled.div``
class Routes extends React.Component {
  handleScroll = () => {
    //this.refs.header.getDOMNode().style.top = document.documentElement.scrollTop + 'px';
    this.scrollPos = window.scrollY
  }

  handleResize = () => {
    console.log('handle resize?')
  }

  render() {
    return (
      <Router>
        <Container>
          <Route path="/" ref="header" component={HeaderContainer} />
          <Route path="/" ref="about" component={AboutContainer} />
          <Route path="/" ref="work" component={WorkContainer} />
          <Route path="/" ref="contact" component={ContactContainer} />
          <Route path="/" ref="other" component={OtherContainer} />
          <Route path="/" ref="extra" component={Extra} />
          <Footer />
        </Container>
      </Router>
    )
  }

  // lets redo this, don't need all that stuff
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
    // add resizing

    // set the tops
    const AboutRect = ReactDOM.findDOMNode(this.refs['about']).getBoundingClientRect()
    const AboutTop = Math.floor(window.scrollY + AboutRect.top)
    const WorkRect = ReactDOM.findDOMNode(this.refs['work']).getBoundingClientRect()
    const WorkTop = Math.floor(window.scrollY + WorkRect.top)
    const ContactRect = ReactDOM.findDOMNode(this.refs['contact']).getBoundingClientRect()
    const ContactTop = Math.floor(window.scrollY + ContactRect.top)
    const OtherRect = ReactDOM.findDOMNode(this.refs['other']).getBoundingClientRect()
    const OtherTop = Math.floor(window.scrollY + OtherRect.top)
    this.props.setTopAction({
      About: AboutTop,
      Work: WorkTop,
      Contact: ContactTop,
      Other: OtherTop,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
    // remove resizing
  }

  componentDidUpdate() {
    // navclicked is no more when section top and scrollY are the same
    if (window.scrollY === this.props.currentSection.yPos && this.props.currentSection.navClicked) {
      this.props.sectionNavClickAction(false)
    }
  }
}

const mapStateToProps = createStructuredSelector({
  currentSection: createSelector(state => state.currentSection, currentSectionState => currentSectionState),
  sectionTops: createSelector(state => state.sectionTops, sectionTopsState => sectionTopsState),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...SectionActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
