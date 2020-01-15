import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {

  const [currentLetter, setCurrentLetter] = useState('');
  const [currentSection, setCurrentSection] = useState('');

  const onLetterClick = ({ currentTarget }) => {
    console.log(currentTarget.name);
    setCurrentLetter(currentTarget.name);
    setCurrentSection(currentTarget.dataset.section)
  };

  return (
    <div className="page">
      <Header
        onClick={onLetterClick}
        currentSectionName={currentSection}
      />
      <Section
        currentSectionName={currentSection}
      />
      <Footer
      />
    </div>
  )
}

export default App;
