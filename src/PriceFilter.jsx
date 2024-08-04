// src/PriceFilter.js
import React, { useState } from 'react';

const PriceFilter = ({ minPrice, maxPrice, onFilterChange }) => {
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);

  const handleMinChange = (event) => {
    setMin(Number(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMax(Number(event.target.value));
  };

  const handleApply = () => {
    onFilterChange(min, max);
  };

  return (
    <div className="price-filter">
      <h3>Filter by Price</h3>
      <label>
        Min Price:
        <input type="number" value={min} onChange={handleMinChange} />
      </label>
      <label>
        Max Price:
        <input type="number" value={max} onChange={handleMaxChange} />
      </label>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default PriceFilter;
