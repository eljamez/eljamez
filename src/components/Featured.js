import React from 'react'
import { Feature } from 'components'
import styled from 'styled-components'
import {Grid, GridCol} from 'griz';

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
        <Grid responsiveMd gutterWidth="10">
          <GridCol>
            <Feature title="Nike.com" />
          </GridCol>
          <GridCol>
            <Feature title="Codepen Fun" />
          </GridCol>
          <GridCol>
            <Feature title="AquafinaSparkling.com" />
          </GridCol>
        </Grid>
      </div>
    </StyledFeatured>
  )
}
