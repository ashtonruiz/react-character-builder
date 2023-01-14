import React from 'react';
import Select from './Select.js';

export default function Picker({ head, shirt, bottom, handleChange }) {
  return (
    <div className="picker">
      <Select
        label="head"
        options={['one', 'two', 'three']}
        value={head}
        onChange={(e) => handleChange('head', e.target.value)}
      />
      <Select
        label="shirt"
        options={['black', 'cream', 'pink', 'white', 'purple']}
        value={shirt}
        onChange={(e) => handleChange('shirt', e.target.value)}
      />
      <Select
        label="bottom"
        options={['plaid', 'pink', 'skirt', 'jeans', 'black']}
        value={bottom}
        onChange={(e) => handleChange('bottom', e.target.value)}
      />
    </div>
  );
}
