import React from 'react'
import avatar from 'assets/avatar.jpg'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'
import NavButton from './NavButton'
import heroBackground from 'assets/background.jpg'

export default ({scrollPos, handleNavClick, currentSection}) => {

  // The header height depending on the sites scroll position
  let headerHeight = window.innerHeight - scrollPos;// * 3;

  // the header height never gets too small
  if (headerHeight <= styleHelpers.headerHeight) {
    headerHeight = styleHelpers.headerHeight
  }

  // the border of the avatar, used for calculations n' such
  const avatarBorderWidth = 20;

  // the starting positions of the avatar, centered and above 
  const avatarTopStart = headerHeight;
  const avatarLeftStart = (window.innerWidth / 2) - (styleHelpers.headerHeight / 2 * 2) - avatarBorderWidth;

  // the calculated avatar position depending on the scrolled position
  const calculatedTop = (avatarTopStart - scrollPos) / 6;
  const calculatedLeft = avatarLeftStart - (scrollPos * 2);

  // and what is it's y pos as we scroll
  const topHeader = Math.round(window.innerHeight / 3);

  // Also, make sure the avatar never leaves
  const avatarTop = calculatedTop < 0 ? 0 : calculatedTop;
  const avatarLeft = calculatedLeft < 0 ? 0 : calculatedLeft;

  const TopBar = styled.div`
    background-color: ${styleHelpers.colors.headerBG};
    background-image: url(${heroBackground});
    background-repeat: no-repeat;
    background-size: auto ${window.innerHeight}px;
    background-position: bottom center;
    background-attachment: fixed;
    color: whitesmoke;
    height: ${headerHeight}px;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    position: fixed;
    top: 0px;
    transition: all 2s ease;
    width: 100%;
    z-index: 2;

    .titleHolder {
      text-align: center;
      transform: translateY(${topHeader}px);

      > h1 {
        ${styleHelpers.fonts.block};
        font-size: 4em;
        margin: 0px;
      }

      > h2 {
        ${styleHelpers.fonts.handwriting};
        font-size: 2.1em;
        margin: 0px;
        top: -10px;
      }
    }

    > nav {
      bottom: 0px;
      position: absolute;
      right: 10px;
    }
  `

  const AvatarHolder = styled.div`    
    margin: 0;
    position: fixed;
    top: 0px;
    height: ${styleHelpers.headerHeight * 2 - avatarBorderWidth}px;
    width: ${styleHelpers.headerHeight * 2 - avatarBorderWidth}px;
    z-index: 3;

    .avatar {
      border: 10px solid ${styleHelpers.colors.headerBG};
      border-radius: 50%;
      height: 100%;
      width: 100%;
      transform: translate(${avatarLeft}px, ${avatarTop}px);
    }

    .welcome {
      border-radius: 10px;
      background-color: whitesmoke;
      color: ${styleHelpers.colors.rangoon};
      display: inline-block;
      ${styleHelpers.fonts.comic};
      font-family: 'Permanent Marker', cursive;
      margin: 0px 0 10px;
      padding: 10px 20px;
      position: absolute;
      white-space: nowrap;
      transform: translate(${avatarLeft}px, ${avatarTop - (styleHelpers.headerHeight * 2 - avatarBorderWidth)}px);

      &:after {
        background: whitesmoke;
        bottom: -8px;
        content: '';
        height: 15px;
        position: absolute;
        left: ${(styleHelpers.headerHeight * 2 - avatarBorderWidth) / 2}px;
        width: 15px;
        transform: rotate(45deg);
      }
    }
  `

  return (
    <div>
      <AvatarHolder>
        <p className="welcome">Welcome to...</p>
        <img src={avatar} className="avatar" alt="logo" />
      </AvatarHolder>
      <TopBar>
        <div className="titleHolder">
          <h1>eljamez.com</h1>
          <h2>My name is james and I am a <span>Front End Engineer</span></h2>
        </div>
        <nav>
          <NavButton section="Featured" handleNavClick={handleNavClick} currentSection={currentSection}/>
          <NavButton section="About" handleNavClick={handleNavClick} currentSection={currentSection}/>
          <NavButton section="Work" handleNavClick={handleNavClick} currentSection={currentSection}/>
          <NavButton section="Contact" handleNavClick={handleNavClick} currentSection={currentSection}/>
        </nav>
      </TopBar>
    </div>
  )
}
