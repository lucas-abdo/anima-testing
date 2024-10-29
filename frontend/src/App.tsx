import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Button clicked {count} times</p>
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
