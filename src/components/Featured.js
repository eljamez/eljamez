import React from 'react'
import styled from 'styled-components'

const StyledFeatured = styled.section`
  margin: 0px;

  > h2 {
    cursor: pointer;
  }

  > p {
    line-height: auto;
  }
`

export default ({scrollPos}) => {
  return (
    <StyledFeatured>
      <h2>Featured</h2>
      <div>
        <h3>just a few recent things...</h3>
        <div>
          <div>
            Nike Work
          </div>
          <div>
            A codepen
          </div>
          <div>
            Other things
          </div>
        </div>
      </div>
    </StyledFeatured>
  )
}
