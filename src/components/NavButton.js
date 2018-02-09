import React from 'react'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'

export default ({ section, handleNavClick, currentSection }) => {
  const NavButton = styled.button`
    ${styleHelpers.fonts.videogame};
    background-color: transparent;
    border: 0px;
    color: ${styleHelpers.colors[section]};
    font-size: 1.9em;
    padding: 5px 20px;
    text-transform: uppercase;
    transition: all 0.2s ease;

    &:hover,
    &.selected {
      color: ${styleHelpers.colors.myWhite};
      cursor: pointer;
      background-color: ${styleHelpers.colors[section]};
    }
  `
  const selectedClass = currentSection === section ? 'selected' : ''

  return (
    <NavButton className={selectedClass} onClick={() => handleNavClick(section)}>
      {section}
    </NavButton>
  )
}
