import React from 'react';
import '../App.css'

function Works() {
    return (
        <div className="Works">
            <h2>Works</h2>
            <div className="ProductWrapper">
                <div className="Product">
                    <p>1ページPDFをPNG形式に変換するツール</p>
                    <hr width="80%"/>
                    <p>GitHub URL <br /> hogehoge</p>
                    <hr width="80%"/>
                    <p>Desctiption</p>
                    <p className="MiniPara">
                        PDF形式で出力される画像データは，パワーポイント等に貼ろうとすると難儀するので，PNG形式に変換するために作成しました．<br />
                        Pythonスクリプトで，単一ページPDFの場合にのみ使用可能です．<br />
                        ソースコードをGitHubに後悔しています．
                    </p>
                </div>
                <div className="Product">
                    <p>Portfolio Site</p>
                    <hr width="80%"/>
                    <p>Site URL <br /> <a href='https://nakayama-portfolio.web.app'>https://nakayama-portfolio.web.app</a></p>
                    <p>GitHub URL <br /> hogehoge</p>
                    <hr width="80%"/>
                    <p>Desctiption</p>
                    <p className="MiniPara">
                        Reactの練習もかねて作成した本サイトです．
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Works;