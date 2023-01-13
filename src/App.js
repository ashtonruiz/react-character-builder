import React, { useState } from 'react';
import Character from './Components/Main/Main.js';
import Picker from './Components/Picker.js';
import background from './background.webp';
import './App.css';

function App() {
  const [head, setHead] = useState('one');
  const [shirt, setMiddle] = useState('white');
  const [bottom, setBottom] = useState('skirt');

  // const [input, setInput] = useState('');

  // move handle change to Select.js?
  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
    }
    if (type === 'shirt') {
      setMiddle(value);
    }
    if (type === 'bottom') {
      setBottom(value);
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <main>
        <h1>Pick a character</h1>
        <section className="container">
          <div className="left">
            <Picker {...{ head, shirt, bottom, handleChange }} />
          </div>
          <div className="right">
            <Character {...{ head, shirt, bottom }} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
