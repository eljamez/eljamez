import React, { useState } from 'react';
import { BACKGROUNDS, LETTERS, SECTION_NAMES } from './utils/constants';
import Header from './components/Header';
import Letter from './components/Letter';
import Section from './components/Section';
import Footer from './components/Footer';

import './App.scss';

const App = () => {

  const [currentSection, setCurrentSection] = useState('Home');
  const [prevSection, setPrevSection] = useState('');
  const [goCurrentSection, setGoCurrentSection] = useState('Home');
  const [fading, setFading] = useState(false);
  const [backgroundImage] = useState(BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)]);
  const [pageClasses, setPageClasses] = useState('page');

  const pageStyles = {
    backgroundImage: `url('${backgroundImage}')`,
  };

  const onLetterClick = ({ currentTarget }) => {
    if (fading === false || currentTarget.dataset.section !== currentSection) {
      setFading(true);
      setPrevSection(currentSection);
      setCurrentSection(currentTarget.dataset.section);
      setPageClasses('page transitioning');
      setTimeout(() => {
        setGoCurrentSection(currentTarget.dataset.section);
        setFading(false);
        setPageClasses('page');
      }, 500)
    }
  };

  return (
    <div className={pageClasses} style={pageStyles}>
      <Header>
        {LETTERS.map((letter, index) => {
          const isSelected = SECTION_NAMES[index] === currentSection;
          const lastSelected = SECTION_NAMES[index] === prevSection;
          return (<Letter
            character={letter}
            sectionName={SECTION_NAMES[index]}
            onClick={onLetterClick}
            selected={isSelected}
            prevSelected={lastSelected}
            key={index}
          />)
        })}
      </ Header>
      {goCurrentSection !== "Home" &&
        <Section
          currentSectionName={goCurrentSection}
          isFading={fading}
        />
      }
      <Footer
      />
    </div>
  )
}

export default App;
