import React from 'react';
import Select from './Select.js';

export default function Picker({ head, handleChange }) {
  return (
    <div className="picker">
      <Select
        label="head"
        options={['one', 'two', 'three']}
        value={head}
        onChange={(e) => handleChange('head', e.target.value)}
      />
    </div>
  );
}
