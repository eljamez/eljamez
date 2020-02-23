import React, { useState } from 'react';
import { BACKGROUNDS } from './utils/constants';
import Header from './components/Header';
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
      <Header
        onClick={onLetterClick}
        currentSectionName={currentSection}
        prevSectionName={prevSection}
      />
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
