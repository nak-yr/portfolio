import React from 'react';
import '../App.css';
import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { FaWordpress } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'

function Skills() {
    return (
        <div className="Skills">
            Skills
            <IconContext.Provider value={{
                color: 'white', size: '5vw'
            }}>
                <ul className="ListSkills">
                    <li><FaHtml5 /> HTML5</li>
                    <li><FaWordpress /> Wordpress</li>
                    <li><FaReact /> React</li>
                    <li><FaPython />Python</li>
                    <li><IoLogoJavascript />JavaScript</li>
                </ul>
            </IconContext.Provider>
        </div>
    );
}

export default Skills;