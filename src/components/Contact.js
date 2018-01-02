import React from 'react'
import styled from 'styled-components'

const Contact = styled.section`

  > h2 {
    
  }

  > p {
    line-height: auto;
  }
`

export default ({isShowing}) => {
  return (
    <Contact className={isShowing}>
      <h2>Contact</h2>
        <div>
            <p>What goes on in my mind</p>
        </div>
    </Contact>
  )
}
