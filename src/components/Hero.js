import React from 'react'
import styled from 'styled-components'

const Hero = styled.section`
  height: 247px;
  margin: 247px 0 0;

  > h2 {
    
  }

  > p {
    line-height: auto;
  }
`

export default ({isShowing}) => {
  return (
    <Hero className={isShowing}>
      <h2>James Augustus Hall ...</h2>
        <div>
            <p>Zap</p>
        </div>
    </Hero>
  )
}
