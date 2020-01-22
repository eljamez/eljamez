import React, { useState } from 'react';
import { BACKGROUNDS, SECTIONS } from './utils/constants';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

import './App.scss';

const App = () => {

  const [currentSection, setCurrentSection] = useState('Home');
  const [goCurrentSection, setGoCurrentSection] = useState('Home');
  const [fading, setFading] = useState(false);
  const [backgroundImage] = useState(BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)]);
  const [pageClasses, setPageClasses] = useState('page fadeIn');

  const pageStyles = {
    backgroundImage: `url('${backgroundImage}')`,
  };

  const getCurrentSectionData = (sectionName) => SECTIONS.find(section => section.name === sectionName);

  const onLetterClick = ({ currentTarget }) => {
    if (fading === false || currentTarget.dataset.section !== currentSection) {
      setFading(true);
      setCurrentSection(currentTarget.dataset.section);
      setPageClasses('page transitioning');
      setTimeout(() => {
        setGoCurrentSection(getCurrentSectionData(currentTarget.dataset.section));
        setFading(false);
        setPageClasses('page');
      }, 500)
    }
  };

  return (
    <div className={pageClasses} style={pageStyles}>
      <Header
        onClick={onLetterClick}
        currentSectionName={currentSection}
      />
      {goCurrentSection !== "Home" &&
        <Section
          currentSectionData={goCurrentSection}
          isFading={fading}
        />
      }
      <Footer
      />
    </div>
  )
}

export default App;
