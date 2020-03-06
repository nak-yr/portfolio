import React from 'react';
import '../App.css'

function AboutMe() {
    return (
        <div className="AboutMe">
            About Me
            <div className="ParagraphWrapper">
                <p>
                    こんにちは，中山と申します．情報系の大学に通う学生です．<br />
                    新しい技術のトレンドを追ったり，手を動かして新しいことを学ぶことが好きです．<br />
                    このサイトもReactの勉強の一環として，<code>React.js</code>を用いて制作しています．
                </p>
                <p>
                    このポートフォリオサイトでは，私が今まで作ったもの，<br />
                    身につけたスキルなどをお伝えします．
                </p>
            </div>
        </div>
    );
}

export default AboutMe;