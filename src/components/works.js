import React from 'react';
import '../App.css'

function Works() {
    return (
        <div className="Works light" id="Works">
            <h2>Works</h2>
            <div className="ProductWrapper">
                <div className="Product">
                    <p className="light">1ページPDFをPNG形式に変換するツール</p>
                    <hr width="80%"/>
                    <p className="light">GitHub URL <br /> <a href='https://github.com/nak-yr/convert_pdf-to-png'>https://github.com/nak-yr/convert_pdf-to-png</a></p>
                    <hr width="80%"/>
                    <p className="light">Desctiption</p>
                    <p className="MiniPara light">
                        PDF形式で出力される画像データは，パワーポイント等に貼ろうとすると難儀するので，PNG形式に変換するために作成しました．<br />
                        Pythonスクリプトで，単一ページPDFの場合にのみ使用可能です．<br />
                        ソースコードをGitHubに公開しています．
                    </p>
                </div>
                <div className="Product">
                    <p className="light">Portfolio Site</p>
                    <hr width="80%"/>
                    <p className="light">Site URL <br /> <a href='https://nakayama-portfolio.web.app'>https://nakayama-portfolio.web.app</a></p>
                    <p className="light">GitHub URL <br /> <a href='https://github.com/nak-yr/portfolio'>https://github.com/nak-yr/portfolio</a></p>
                    <hr width="80%"/>
                    <p className="light">Desctiption</p>
                    <p className="MiniPara light">
                        Reactの練習もかねて作成した本サイトです．
                    </p>
              </div>
          </div>
          <div className="ProductWrapper">
            <div className="Product">
                    <p className="light">簡易的なコロナ情報サイト</p>
                    <hr width="80%"/>
                    <p className="light">Site URL <br /> <a href='https://simpleinfo-covid19.web.app'>https://simpleinfo-covid19.web.app</a></p>
                    <p className="light">GitHub URL <br /> <a href='https://github.com/nak-yr/simpleinfo-covid19'>https://github.com/nak-yr/simpleinfo-covid19</a></p>
                    <hr width="80%"/>
                    <p className="light">Desctiption</p>
                    <p className="MiniPara light">
                        国が公開しているjson形式のコロナ関連の情報を，わかりやすい指標でまとめたサイトです．
                    </p>
            </div>
          </div>
        </div>
    );
}

export default Works;