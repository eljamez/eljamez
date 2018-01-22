import React from 'react'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'
import {Grid, GridCol} from 'griz';

export default () => {
  const Footer = styled.footer`
    background-color: ${styleHelpers.colors.rangoon};
    box-sizing: border-box;
    color: ${styleHelpers.colors.myWhite};
    margin: 0px;
    padding: 20px 20px 20px ${styleHelpers.leftSitePadding}px;

    nav {
      a {
        margin-right: 10px;
      }
    }

    a {
      color: ${styleHelpers.colors.myWhite};
    }
  `

  return (
    <Footer>
      <Grid gutterWidth="{styleHelpers.gridGutterWidth}">
        <GridCol>
          <nav>
            <a href="http://codepen.io/eljamez/"><i class="fa fa-codepen"></i></a>
            <a href="http://eljamez.github.io/"><i class="fa fa-github"></i></a>
            <a href="https://twitter.com/eljamez"><i class="fa fa-twitter"></i></a>
            <a href="https://instagram.com/eljamez"><i class="fa fa-instagram"></i></a>
            <a href="http://jaugustus.tumblr.com/"><i class="fa fa-tumblr"></i></a>
            <a href="http://www.linkedin.com/in/eljamez"><i class="fa fa-linkedin"></i></a>
            <a href="https://soundcloud.com/eljamez"><i class="fa fa-soundcloud"></i></a>
          </nav>
        </GridCol>
        <GridCol>
          &copy; eljamez.com Date
        </GridCol>
      </Grid>
    </Footer>
  )
}
