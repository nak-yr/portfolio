import React from 'react';
import '../App.css';
import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaWordpress } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

function Skills() {
    return (
        <div className="Skills dark" id="Skills">
            <h2>Skills</h2>
            <IconContext.Provider value={{
                color: 'white', size: '5vw'
            }}>
                <ul className="ListSkills">
                    <li><FaHtml5 /> HTML5</li>
                    <li><FaCss3Alt /> CSS3</li>
                    <li><IoLogoJavascript />ECMAScript</li>
                    <li><FaReact /> React.js</li>
                    <li><FaPython />Python</li>
                    <li><FaWordpress /> Wordpress</li>
                </ul>
            </IconContext.Provider>
        </div>
    );
}

export default Skills;