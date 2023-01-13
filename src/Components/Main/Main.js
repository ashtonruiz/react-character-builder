import React from 'react';

export default function Character({ head, middle, bottom }) {
  return (
    <div>
      <div className="character">
        <img className="head" src={`./${head}-head.png`}></img>
      </div>
    </div>
  );
}
