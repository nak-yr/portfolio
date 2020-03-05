import React from 'react';
import './App.css'
import { FaGithub } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { FiHash } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import Tippy from '@tippy.js/react';
//import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>
      <div className="Landing">
        <h1><FiHash />Nakayama's Portfolio Site</h1>
      </div>
      <div className="AboutMe">
        <h2>About Me</h2>
      </div>
      <div className="Works">
        <h2>Works</h2>
      </div>
      <div className="Contact">
        <h2>Contact</h2>
        <div className="IconWrapper">
          <IconContext.Provider value={{ color: 'black', size: '10vw' }}>
            <div style={{ paddingBottom: '20px' }}>
              <Tippy content='Contact on GitHub' placement='bottom'>
                <a href="https://github.com/nakayama-ko"><FaGithub /></a>
              </Tippy>
            </div>
            <br />
            <div style={{ paddingBottom: '20px' }}>
              <Tippy content='Contact by Mail' placement='bottom'>
                <a href="mailto:nkwork874@gmail.com"><MdMailOutline /></a>
              </Tippy>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div >

  );
}


export default App;
