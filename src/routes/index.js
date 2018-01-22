import React from 'react'
import { HeaderContainer } from 'containers'
import { FeaturedContainer } from 'containers'
import { AboutContainer } from 'containers'
import { WorkContainer } from 'containers'
import { ContactContainer } from 'containers'
import { Footer } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ScrollActions from 'actions/scroll'
import * as SectionActions from 'actions/section'

import styled from 'styled-components'

const Container = styled.div`
  
`
class Routes extends React.Component {

  handleScroll = () => {
    this.props.scrollPosAction(window.scrollY);
  }

  handleResize = () => {
    console.log('handle resize?');
  }

  render () {
    return (
      <Router>
        <Container>
          <Route path="/" ref="header" component={HeaderContainer} />
          <Route path="/" ref="featured" component={FeaturedContainer} handleResize={this.handleResize}/>
          <Route path="/" ref="about" component={AboutContainer} />
          <Route path="/" ref="work" component={WorkContainer} />
          <Route path="/" ref="contact" component={ContactContainer} />
          <Footer/>
        </Container>
      </Router>
    )
  }

  // lets redo this, don't need all that stuff
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    // add resizing
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    // remove resizing
  }

  componentDidUpdate() {
    // navclicked is no more when section top and scrollY are the same
    if(this.props.scrollPos === this.props.currentSection.yPos && this.props.currentSection.navClicked){
      this.props.sectionNavClickAction(false)
    }
  }
}

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
  return bindActionCreators({ ...ScrollActions, ...SectionActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
