import React from 'react';
import './App.css'
import Title from './components/title'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import Works from './components/works'
import Contact from './components/contact'
//import Button from '@material-ui/core/Button';

function App() {
  return (
    <>
      <Title />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}

export default App;
