import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  }
  
  const handleSubtract = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Button result: {count}</p>
        <button onClick={handleClick}>Click me</button>
        <div>
          <button onClick={handleSubtract}>Subtract</button>
        </div>
      </header>
    </div>
  );
}

export default App;
