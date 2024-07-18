import React from 'react';

export default function Character({ head, shirt, bottom }) {
  return (
    <div className="character-card">
      <div className="character-head">
        <img className="head" src={`./${head}-head.png`}></img>
      </div>
      <div className="character-shirt">
        <img className="shirt" src={`./${shirt}-shirt.png`}></img>
      </div>
      <div className="character-bottom">
        <img className="bottom" src={`./${bottom}-bottom.png`}></img>
      </div>
    </div>
  );
}
