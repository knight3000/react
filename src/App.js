import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
import  AtriaButton from '@atria-design-system/button/react';

function App() {
  const handleButtonClick = (event) => {
    console.log('React received:', event.detail);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Atria Button with React Wrapper</h1>
      <AtriaButton
        buttonId="reactBtn"
        buttonText="Click Me now!"
        buttonType="bh-primary"
        onBtnClick={handleButtonClick}
      ></AtriaButton>
    </div>
  );
}

export default App;
