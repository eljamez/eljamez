import React from 'react'
import styled from 'styled-components'

const Work = styled.section`
  margin: 0px;

  > h2 {
    
  }

  > p {
    line-height: auto;
  }
`

export default ({isShowing}) => {
  return (
    <Work className={isShowing}>
      <h2>Work</h2>
        <div>
            <p>past work here</p>
        </div>
    </Work>
  )
}
