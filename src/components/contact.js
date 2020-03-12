import React from 'react';
import '../App.css'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { FaGithub } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { IconContext } from 'react-icons'


function Contact() {
    return (
        <div className="Contact dark" id="Contact">
            <h2>Contact</h2>
            <div className="IconContact" style={{ paddingTop: '5vw' }}>
                <IconContext.Provider value={{ color: 'white', size: '10vmin' }}>
                    <div style={{ paddingRight: '10vw' }}>
                        <Tippy
                            content={<span style={{ color: 'white' }}>On GitHub</span>} placement='bottom'
                        >
                            <a href="https://github.com/nakayama-ko"><FaGithub /></a>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy
                            content={<span style={{ color: 'white' }}>By Mail</span>}
                            placement='bottom'
                        >
                            <a href="mailto:nkwork874@gmail.com"><MdMailOutline /></a>
                        </Tippy>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default Contact;