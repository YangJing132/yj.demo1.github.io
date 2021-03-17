import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          编辑 <code>src/App.js</code> and save to 重新加载.
        </p>
      </header>
    </div>
  );
}

export default App;
