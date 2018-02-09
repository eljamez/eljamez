import React from 'react'
import styled from 'styled-components'

export default ({ title, otherData }) => {
  const StyledFeature = styled.section`
    background-image: url(${otherData.Image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    margin: 10px 10px 0 0;
    min-height: 300px;
    overflow: hidden;
    padding: 0px;
    transition: all 0.4s ease;
    width: initial;
  `

  const getEmbedCode = () => {
    if (otherData.Title === 'Ensly Mogul') {
      return (
        <iframe
          title="enslymogul"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/13150380&amp;color=%239e91a4&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
        />
      )
    }
    if (otherData.Title === 'CodePen') {
      return (
        <iframe
          title="codepen"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          src="//codepen.io/eljamez/embed/dYNjvY/?height=265&amp;theme-id=dark&amp;default-tab=result&amp;embed-version=2"
        />
      )
    }
    if (otherData.Title === 'The Enemy Within') {
      return (
        <iframe
          title="enemywithin"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          src="https://www.youtube.com/embed/e4s_AEOtLrE"
          allowFullScreen
        />
      )
    }
  }

  return <StyledFeature>{getEmbedCode()}</StyledFeature>
}
