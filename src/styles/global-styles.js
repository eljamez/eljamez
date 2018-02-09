import { injectGlobal } from 'styled-components'
import background from 'assets/dust_scratches.png'
import styleHelpers from 'constants/StyleHelpers'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background-image: url(${background});
    background-repeat: repeat;
    background-attachment: fixed;
    ${styleHelpers.fonts.mainSans};
    box-sizing: border-box;
    color: ${styleHelpers.colors.rangoon};
    height: 100%;
    padding-top: ${Math.round(window.innerHeight - styleHelpers.headerHeight)}px;
    scroll-behavior: smooth;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }

  section {
    box-sizing: border-box;
    display: block;
    padding: ${styleHelpers.headerHeight}px 20px 0px ${styleHelpers.leftSitePadding}px;
    position: relative;
    width: 100%;

    > h2 {
      box-sizing: border-box;
      color: ${styleHelpers.colors.myWhite};
      display: inline-block;
      text-transform: uppercase;
      ${styleHelpers.fonts.videogame};
      font-size: 2em;
      line-height: 2em;
      left: -${styleHelpers.leftSitePadding}px;
      margin: 0;
      padding: 0 0 0 ${styleHelpers.leftSitePadding}px;
      position: relative;
      width: ${window.innerWidth}px;
    }

    h3 {
      ${styleHelpers.fonts.mainSans};
      font-weight: bold;
      text-transform: uppercase;
    }

    p, li {
      margin: 0;
      line-height: 1.8em;
    }

    ul {
      padding: 0px;
    }

    li {
      font-size: .9em;
    }

    p {
      font-size: .9em;
      padding-bottom: 20px;
    }

    > .isShowing {
      display: block;
    }

    > .isHidden {
      display: none;
    }
  }
`
