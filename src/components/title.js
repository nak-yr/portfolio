import React from 'react';
import '../App.css'

function Title() {
    return (
        <div className="Title dark" id="Title">
            <h1>Nakayama's Portfolio Site</h1>
            <ul className="ListTitle">
                <li><a className="TitleContent" href="#Title">HOME</a></li>
                <li><a className="TitleContent" href="#AboutMe">ABOUTME</a></li>
                <li><a className="TitleContent" href="#Skills">SKILLS</a></li>
                <li><a className="TitleContent" href="#Works">WORKS</a></li>
                <li><a className="TitleContent" href="#Contact">CONTACT</a></li>
            </ul>
        </div>
    );
}

export default Title;