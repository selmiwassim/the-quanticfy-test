import React from 'react';

const SearchFilter = ({ input, handleFilterChange }) => (
  <div className="search-container">
    <input
      className="search-input"
      type="text"
      placeholder="Search by place name..."
      name="input"
      value={input}
      onChange={handleFilterChange}
    />
  </div>
);

export default SearchFilter;
