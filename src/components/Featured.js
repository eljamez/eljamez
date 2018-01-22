import React from 'react'
import { Feature } from 'components'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'
import {Grid, GridCol} from 'griz'

export default ({h2Pos}) => {
  const StyledFeatured = styled.section`
    margin: 0px;

    > h2 {
      cursor: pointer;
      transform: translateX(${h2Pos}px);
    }

    > p {
      line-height: auto;
    }
  `
  return (
    <StyledFeatured>
      <h2>Featured</h2>
      <div>
        <h3>just a few recent things...</h3>
        <Grid responsiveMd gutterWidth={styleHelpers.gridGutterWidth}>
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
