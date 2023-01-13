import React, { useState } from 'react';
import Character from './Components/Main/Main.js';
import Picker from './Components/Picker.js';
import background from './background.webp';
import './App.css';

function App() {
  const [head, setHead] = useState('one');

  // const [input, setInput] = useState('');

  // move handle change to Select.js?
  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <main>
        <h1>Pick a character</h1>
        <section className="container">
          <div className="left">
            <Picker {...{ head, handleChange }} />
          </div>
          <div className="right">
            <Character {...{ head }} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
