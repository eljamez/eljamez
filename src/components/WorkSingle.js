import React from 'react'
import styled from 'styled-components'
import {Grid, GridCol} from 'griz';
import styleHelpers from 'constants/StyleHelpers'

export default ({title, workData}) => {
  const fadedBackground = "rgba(0,0,0,.5)"
  const headerFooterHeight = 40
  const bgSize = workData.type === 'large' ? 'auto 100%' : '100%';
  const bgSizeHovered = workData.type === 'large' ? 'auto 120%' : '120%';
  const StyledWork = styled.section`
    background-image: url(${workData.Desktop});
    background-size: ${bgSize};
    background-position: center center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    margin: 10px 10px 0 0;
    overflow: hidden;
    padding: 0px;
    transition: all .4s ease;
    width: initial;

    h4 {
      background-color: ${fadedBackground};
      box-sizing: border-box;
      color: ${styleHelpers.colors.myWhite};
      ${styleHelpers.fonts.bree};
      height: ${headerFooterHeight}px;
      letter-spacing: 1.2px;
      margin: 0;
      opacity: 0;
      padding: ${styleHelpers.gridGutterWidth}px;
      text-align: right;
      text-transform: uppercase;
      transform: translateY(${headerFooterHeight}px);
      transition: all .5s ease;
    }

    .imageContainer {
      background-color: ${styleHelpers.colors.headerBG};
      border-radius: 5px;
      box-sizing: border-box;
      margin: ${styleHelpers.gridGutterWidth}px;
      opacity: 0;
      padding: 5px;
      position: relative;
      width: calc(100%-${styleHelpers.gridGutterWidth}px);
      transform: translateX(${styleHelpers.gridGutterWidth}px);
      transition: all .5s ease;

      img {
        display: block;
        width: 100%;
      }
    }
    
    .description {
      background-color: ${fadedBackground};
      box-sizing: border-box;
      color: ${styleHelpers.colors.myWhite};
      font-size: .9em;
      height: ${headerFooterHeight}px;
      opacity: 0;
      padding: ${styleHelpers.gridGutterWidth}px;
      transform: translateY(-${headerFooterHeight}px);
      transition: all .5s ease;

      .view {
        background-color: ${styleHelpers.colors.myWhite};
        border-radius: 3px;
        color: ${styleHelpers.colors.myMaroon};
        float: right;
        font-size: .9em;
        ${styleHelpers.fonts.block};
        line-height: auto;
        padding: 0 10px;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        top: -2px;
        transition: all .3s ease;

        &:hover {
          background-color: ${styleHelpers.colors.myMaroon};
          color: ${styleHelpers.colors.myWhite};
        }
      }
    }

    &:hover {
      background-size: ${bgSizeHovered};

      h4 {
        opacity: 1;
        transform: translateY(0px);
      }

      .imageContainer {
        opacity: 1;
        transform: translateX(0px);
      }

      .description {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  `

  /**
   * returns the mobile image if it's a 'large' type
   */
  const getMobileImage = () => {
    if (workData.type === 'large') {
      return (
        <GridCol offset="70">
          <div className="imageContainer">
            <img className="mobileImage" alt={workData.Title} src={workData.Mobile} />
          </div>
        </GridCol>
      )
    }
  }

  /**
   * returns the proper description based on worktype
   */
  const getDescription = () => {
    return workData.type === 'large' ? (
      workData.Description
    ) : ''
  }

  /**
   * returns live link if exists
   */
  const getLiveLink = () => {
    return workData.URL ? (
      <a href={workData.URL} className="view" target="_blank">View Site</a>
    ) : ''
  }

  return (
    <StyledWork>
      <h4>{workData.Title}</h4>
      <Grid responsiveSm gutterless>
        {getMobileImage()}
        <GridCol column="100">
          <p className="description">{getDescription()}{getLiveLink()}</p>
        </GridCol>
      </Grid>
    </StyledWork>
  )
}
