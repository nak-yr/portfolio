import React from 'react';
import './App.css'
import Title from './components/title'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import Works from './components/works'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Title />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
