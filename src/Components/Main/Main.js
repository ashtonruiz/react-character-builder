import React from 'react';

export default function Character({ head, middle, bottom }) {
  return (
    <div>
      <div className="character">
        <div className="head" style={{ backgroundImage: `url(./${head}-head.png)` }}></div>
      </div>
    </div>
  );
}
