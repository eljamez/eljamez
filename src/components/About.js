import React from 'react'
import styled from 'styled-components'

const About = styled.section`
  margin: 0px;

  > h2 {
    
  }

  > p {
    line-height: auto;
  }
`

export default ({isShowing}) => {
  return (
    <About className={isShowing}>
      <h2>About</h2>
        <div>
            <p>What goes on in my mind</p>
        </div>
    </About>
  )
}
