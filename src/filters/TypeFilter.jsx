import React from 'react';

const TypeFilter = ({ selectedType, retrieveTypes, handleFilterChange }) => (
  <label>
    Type:
    <select name="type" value={selectedType} onChange={handleFilterChange}>
      {retrieveTypes().map((type, index) => (
        <option key={index} value={type}>{type}</option>
      ))}
    </select>
  </label>
);

export default TypeFilter;
