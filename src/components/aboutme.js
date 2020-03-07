import React from 'react';
import '../App.css'

function AboutMe() {
    return (
        <div className="AboutMe light" id="AboutMe">
            <h2>About Me</h2>
            <p className="light">
                こんにちは，中山と申します．情報系の大学に通う学生です．<br />
                新しい技術のトレンドを追ったり，手を動かして新しいことを学ぶことが好きです．<br />
                このサイトもReactの勉強の一環として，<code>React.js</code>を用いて制作しています．
            </p>
            <p className="light">
                趣味は散歩と日本茶を飲むことで，思い立ってはひたすらに街を歩き回って景色を楽しんでいます．<br />
                日本茶はかなり好きで，普段はお茶以外なかなか飲みません．最近はほうじ茶に興味があります．
            </p>
            <p className="light">
                このポートフォリオサイトでは，私が今まで作ったもの，<br />
                身につけたスキルなどをお伝えします．
            </p>
        </div>
    );
}

export default AboutMe;