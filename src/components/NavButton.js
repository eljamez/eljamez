import React from 'react'
import styled from 'styled-components'
import background from 'assets/dust_scratches.png'
import styleHelpers from 'constants/StyleHelpers'

const NavButton = styled.button`
  ${styleHelpers.fonts.block};
  background-color: transparent;
  border: 0px;
  color: ${styleHelpers.colors.myWhite};
  font-size: 1.4em;
  padding: 5px 20px;
  text-transform: uppercase;
  transition: all .2s ease;

  &:hover {
    color: ${styleHelpers.colors.rangoon};
    cursor: pointer;
    background-image: url(${background});
    background-repeat: repeat;
    background-attachment: fixed;
  }

  &.selected {
    color: ${styleHelpers.colors.rangoon};
    background-image: url(${background});
    background-repeat: repeat;
    background-attachment: fixed;
  }
`

export default ({section, handleNavClick, currentSection}) => {
  let selectedClass = '';
  if(currentSection === section) {
    selectedClass = 'selected';
  }
  return (
    <NavButton className={selectedClass} onClick={() => handleNavClick(section)}>{section}</NavButton>
  )
}
