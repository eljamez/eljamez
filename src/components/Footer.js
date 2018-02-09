import React from 'react'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'

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

    p {
      margin: 0px;
      text-align: right;
    }
  `

  return (
    <Footer>
      <nav>
        <a href="http://codepen.io/eljamez/">
          <i className="fab fa-codepen" />
        </a>
        <a href="http://eljamez.github.io/">
          <i className="fab fa-github" />
        </a>
        <a href="https://twitter.com/eljamez">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://instagram.com/eljamez">
          <i className="fab fa-instagram" />
        </a>
        <a href="http://jaugustus.tumblr.com/">
          <i className="fab fa-tumblr" />
        </a>
        <a href="http://www.linkedin.com/in/eljamez">
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://soundcloud.com/eljamez">
          <i className="fab fa-soundcloud" />
        </a>
      </nav>

      <p>
        <i class="fas fa-copyright" /> eljamez.com 2018
      </p>
    </Footer>
  )
}
