import React, { useState } from 'react';
import Character from './Components/Main/Main.js';
import Picker from './Components/Picker.js';
import background from './background.webp';
import './App.css';
import Stats from './Components/Stats.js';

function App() {
  const [head, setHead] = useState('one');
  const [shirt, setMiddle] = useState('white');
  const [bottom, setBottom] = useState('skirt');

  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  // const [input, setInput] = useState('');

  // move handle change to Select.js?
  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
      setHeadCount(headCount + 1);
    }
    if (type === 'shirt') {
      setMiddle(value);
      setMiddleCount(middleCount + 1);
    }
    if (type === 'bottom') {
      setBottom(value);
      setBottomCount(bottomCount + 1);
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
        <div className="counter"></div>
        <h2 className="paragraph">
          You have changed your face {headCount} times. You have changed your shirt {middleCount}{' '}
          times. You have changed your bottoms {bottomCount} times.
        </h2>
      </main>
    </div>
  );
}

export default App;
