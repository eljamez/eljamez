import React from 'react'
import { OtherSingle } from 'components'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'
import OtherData from 'constants/OtherData'

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
        <OtherSingle otherData={OtherData.EnslyMogul} />
        <OtherSingle otherData={OtherData.CodePen} />
        <OtherSingle otherData={OtherData.EnemyWithin} />
      </div>
    </StyledFeatured>
  )
}
