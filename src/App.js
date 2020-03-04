import React from 'react';
import './App.css';
import { FiHash } from 'react-icons/fi'

/*トップの項目を生成，リスト化 */
const topContents = ['Home', 'About Me', 'Works', 'Contact'];
const TopBar = () => {
  return (
    topContents.map((number) =>
      <li className="nav_item">{number}</li>
    )
  );
}

function App() {
  return (
    <div className="App">
      <div className="TopBar">
        <ul className="nav"><TopBar /></ul>
      </div>
      <div className="App-header">
        <FiHash color='orange' /> Nakayama's Portfolio Page
      </div>
    </div >
  );
}

export default App;
