import React from 'react'
import styled from 'styled-components'
import {Grid, GridCol} from 'griz'

export default ({h2Pos}) => {
  const Contact = styled.section`
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
    <Contact>
      <h2>Contact</h2>
        <div>
          <Grid responsiveMd gutterless>
            <GridCol column="60">
             Contact Form
            </GridCol>
            <GridCol column="40">
              Something else
            </GridCol>
          </Grid>
        </div>
    </Contact>
  )
}
