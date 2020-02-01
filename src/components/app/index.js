import React from 'react';
import logo from '../../assets/logo.svg';
import './style.css';

import D3 from '../charts/d3'
import Victory from '../charts/victory'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <D3 />
        <Victory />
      </header>
    </div>
  );
}

export default App;
