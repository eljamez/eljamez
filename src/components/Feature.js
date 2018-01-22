import React from 'react'
import styled from 'styled-components'
import {Grid, GridCol} from 'griz';
import styleHelpers from 'constants/StyleHelpers'

const StyledFeature = styled.section`
  //background-color: ${styleHelpers.colors.pine};
  //border: 1px solid ${styleHelpers.colors.rangoon};
  border-radius: 5px;
  margin: 0px;
  padding: 0px;
`

export default ({title}) => {
  return (
    <StyledFeature>
      <h4>{title}</h4>
      <Grid responsiveSm>
        <GridCol>
          Desktop
        </GridCol>
        <GridCol>
          Mobile
        </GridCol>
      </Grid>
    </StyledFeature>
  )
}
