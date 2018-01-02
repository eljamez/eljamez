import React from 'react'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'

const Footer = styled.footer`
  background-color: ${styleHelpers.colors.rangoon};
  box-sizing: border-box;
  color: ${styleHelpers.colors.myWhite};
  margin: 0px;
  padding: 20px;
`

export default () => {
  return (
    <Footer>
      
      <p>This is totally the footer</p>
    </Footer>
  )
}
