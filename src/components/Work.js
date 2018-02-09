import React from 'react'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'
import { WorkSingle } from 'components'
import workData from 'constants/WorkData'

export default ({ h2Pos }) => {
  const Work = styled.section`
    margin: 0px;

    > h2 {
      background-color: ${styleHelpers.colors.Work};
      cursor: pointer;
      transform: translateX(${h2Pos}px);
    }

    .grid {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;

      &-work1,
      &-work3 {
        grid-column-start: 1;
        grid-column-end: 5;
        @media (min-width: 700px) {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }

      &-work2,
      &-work4 {
        grid-column-start: 1;
        grid-column-end: 5;
        @media (min-width: 700px) {
          grid-column-start: 3;
          grid-column-end: 5;
        }
      }
    }

    > p {
      line-height: auto;
    }
  `
  return (
    <Work>
      <h2>Work</h2>
      <div className="grid">
        <div className="grid-work1">
          <WorkSingle title="Nike" workData={workData.Nike} />
        </div>
        <div className="grid-work2">
          <WorkSingle title="Aquafina Sparking" workData={workData.Aquafina} />
        </div>
        <div className="grid-work3">
          <WorkSingle title="Kombucha Wonder Drink" workData={workData.Kombucha} />
        </div>
        <div className="grid-work4">
          <WorkSingle title="Friends of the Children" workData={workData.Friends} />
        </div>
        <div className="grid-work5">
          <WorkSingle workData={workData.GoodCoffee} />
        </div>
        <div className="grid-work6">
          <WorkSingle workData={workData.Snaplaces} />
        </div>
        <div className="grid-work7">
          <WorkSingle workData={workData.OneSight} />
        </div>
        <div className="grid-work8">
          <WorkSingle workData={workData.BluerDenim} />
        </div>
        <div className="grid-work9">
          <WorkSingle workData={workData.Digimarc} />
        </div>
        <div className="grid-work10">
          <WorkSingle workData={workData.LGI} />
        </div>
        <div className="grid-work11">
          <WorkSingle workData={workData.PaintTheMoon} />
        </div>
        <div className="grid-work12">
          <WorkSingle workData={workData.ScaleOut} />
        </div>
        <div className="grid-workMore">
          <h3>Other Past Clients Include...</h3>
          <p>
            Kettle Chips, HBO, Travelocity Business, The Shins, Beth Ditto, Vagrant Records, HP, Basic Rights Oregon,
            Widmer Brewing, The Playground Gym.
          </p>
        </div>
      </div>
    </Work>
  )
}
