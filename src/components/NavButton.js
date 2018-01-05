import React from 'react'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'

const NavButton = styled.button`
  font-family: 'Bree Serif', serif;
  background-color: transparent;
  border: 0px;
  color: whitesmoke;
  font-size: 1.4em;
  padding: 5px 20px;
  text-transform: uppercase;
  transition: all .2s ease;

  &:hover {
    color: ${styleHelpers.colors.rangoon};
    cursor: pointer;
    background-color: whitesmoke;
  }

  &.selected {
    color: ${styleHelpers.colors.rangoon};
    background-color: whitesmoke;
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
