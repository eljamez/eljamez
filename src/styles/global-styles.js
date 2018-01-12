import { injectGlobal } from 'styled-components'
import background from 'assets/halftone-yellow.png'
import styleHelpers from 'constants/StyleHelpers'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background-color: ${styleHelpers.colors.myWhite};
    background-image: url(${background});
    background-repeat: repeat;
    background-position: fixed;
    font-family: 'Signika', sans-serif;
    box-sizing: border-box;
    color: ${styleHelpers.colors.rangoon};
    height: 100%;
    padding-top: ${styleHelpers.headerHeight}px;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  section {
    background-color: ${styleHelpers.colors.sectionBG};
    box-sizing: border-box;
    display: block;
    padding: 0px 20px 0px 96px;
    position: relative;
    width: 100%;

    > h2 {
      /*border-radius: 0px 0 0 30px;
      border-bottom: 5px solid CADETBLUE;
      border-left: 2px solid DARKSLATEGRAY;*/
      background-color: ${styleHelpers.colors.sectionHeaderBG};
      box-sizing: border-box;
      color: ${styleHelpers.colors.myWhite};
      display: inline-block;
      ${styleHelpers.fonts.block}
      font-size: 3em;
      line-height: 2em;
      left: -115px;
      margin: 0;
      padding: 0px 110px 0;
      position: relative;
      transform: rotate(-4deg);
    }

    h3 {
      ${styleHelpers.fonts.comic}
    }

    p {
      margin: 0;
    }

    > .isShowing {
      display: block;
    }

    > .isHidden {
      display: none;
    }
  }
`
