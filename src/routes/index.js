import React from 'react'
import { HeaderContainer } from 'containers'
import { HeroContainer } from 'containers'
import { FeaturedContainer } from 'containers'
import { AboutContainer } from 'containers'
import { WorkContainer } from 'containers'
import { ContactContainer } from 'containers'
import { Footer } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ScrollActions from 'actions/scroll'

import styled from 'styled-components'

const Container = styled.div`
  
`
class Routes extends React.Component {

  isScrollingEvent = () => {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  isResizingEvent = () => {
    console.log('resize?');
  }

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
          <Route path="/" ref="hero" component={HeroContainer} />
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
    this.isScrollingEvent();
    this.isResizingEvent();
  }
}

const mapStateToProps = createStructuredSelector({
  scrollPos: createSelector(
    (state) => state.scrollPos,
    (scrollPosState) => scrollPosState,
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...ScrollActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
