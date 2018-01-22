import React from 'react'
import styled from 'styled-components'
import { WorkSingle } from 'components'
import workData from 'constants/WorkData'
import {Grid, GridCol} from 'griz';

export default ({h2Pos}) => {
  const Work = styled.section`
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
    <Work>
      <h2>Work</h2>
      <div>
        <Grid responsiveMd gutterless>
          <GridCol column="50">
            <WorkSingle title="Nike" workData={workData.Nike} />
          </GridCol>
          <GridCol column="50">
            <WorkSingle title="Aquafina Sparking" workData={workData.Aquafina} />
          </GridCol>
          <GridCol column="50">
            <WorkSingle title="Kombucha Wonder Drink" workData={workData.Kombucha} />
          </GridCol>
          <GridCol column="50">
            <WorkSingle title="Friends of the Children" workData={workData.Friends} />
          </GridCol>
        </Grid>
        <Grid responsiveSm gutterless>
          <GridCol column="25">
            <WorkSingle workData={workData.GoodCoffee} />
          </GridCol>
          <GridCol column="25">
            <WorkSingle workData={workData.Snaplaces} />
          </GridCol>
          <GridCol column="25">
            <WorkSingle workData={workData.OneSight} />
          </GridCol>
          <GridCol column="25">
            <WorkSingle workData={workData.BluerDenim} />
          </GridCol>
          <GridCol column="25">
            <WorkSingle workData={workData.Digimarc} />
          </GridCol>
          <GridCol column="25">
            <WorkSingle workData={workData.LGI} />
          </GridCol>
          <GridCol column="25">
            <WorkSingle workData={workData.PaintTheMoon} />
          </GridCol>
          <GridCol column="25">
            <WorkSingle workData={workData.ScaleOut} />
          </GridCol>
          <GridCol column="100">
            <h3>Other Past Clients Include...</h3>
            <p>Kettle Chips, HBO, Travelocity Business, The Shins, Beth Ditto, Vagrant Records, HP, Basic Rights Oregon, Widmer Brewing, The Playground Gym.</p> 
          </GridCol>
        </Grid>

      </div>
    </Work>
  )
}
