import React from 'react';
import './style.css';

import D3 from '../charts/d3'
import Victory from '../charts/victory'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Victory />
        <D3 />
      </header>
    </div>
  );
}

export default App;
