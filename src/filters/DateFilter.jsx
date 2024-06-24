import React from 'react';

const DateFilter = ({ chosenDate, handleFilterChange }) => (
  <label>
    Date:
    <input
      type="date"
      name="date"
      value={chosenDate || ""}
      onChange={handleFilterChange}
    />
  </label>
);

export default DateFilter;
