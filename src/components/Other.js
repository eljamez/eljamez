import React from 'react'
import { OtherSingle } from 'components'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'
import OtherData from 'constants/OtherData'
import { Grid, GridCol } from 'griz'

export default ({ h2Pos }) => {
  const StyledFeatured = styled.section`
    margin: 0px;

    > h2 {
      background-color: ${styleHelpers.colors.Featured};
      cursor: pointer;
      transform: translateX(${h2Pos}px);
    }

    > p {
      line-height: auto;
    }
  `
  return (
    <StyledFeatured>
      <h2>Other</h2>
      <div>
        <Grid responsiveMd gutterless>
          <GridCol>
            <OtherSingle otherData={OtherData.EnslyMogul} />
          </GridCol>
          <GridCol>
            <OtherSingle otherData={OtherData.CodePen} />
          </GridCol>
          <GridCol column="100">
            <OtherSingle otherData={OtherData.EnemyWithin} />
          </GridCol>
        </Grid>
      </div>
    </StyledFeatured>
  )
}
