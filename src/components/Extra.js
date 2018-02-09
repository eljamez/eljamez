import React from 'react'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'

const MyExtra = styled.div`
  padding: 20px 20px 20px ${styleHelpers.leftSitePadding}px;
`

class Extra extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <MyExtra>
        <iframe
          title="kokomo"
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/186924852&amp;color=%239e91a4&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
        />
      </MyExtra>
    )
  }
}

export default Extra
