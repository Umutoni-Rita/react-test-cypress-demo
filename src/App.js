import React, { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("Welcome to Cypress Testing!");

 
  const handleClick = () => {
    setText("You clicked the button!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{text}</h1>
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
