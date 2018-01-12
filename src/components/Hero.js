import React from 'react'
import styled from 'styled-components'
import heroBackground from 'assets/background.jpg'
import styleHelpers from 'constants/StyleHelpers'

export default ({isShowing, scrollPos}) => {

  //const yPos1 = 

  const Hero = styled.section`
    //background-image: url(${heroBackground});
    //background-repeat: repeat;
    //background-size: cover;
    //color: ${styleHelpers.colors.myWhite};
    min-height: 400px;
    margin: 247px 0 0;
    padding: 100px 0 0;
    text-align: center;

    > p {
      ${styleHelpers.fonts.handwriting};
      color: ${styleHelpers.colors.rangoon};
      font-size: 3em;
      line-height: auto;

      &.line-one {
        transform: scale(${scrollPos/100}) translateY(${scrollPos/2}%);
      }

      &.line-two {

      }

      &.line-three {

      }
    }
  `

  return (
    <Hero className={isShowing}>
      <p className="line-one">James Augustus Hall {scrollPos}</p>
      <p className="line-two">Maiking the web</p>
      <p className="line-three">A swell place</p>
    </Hero>
  )
}
