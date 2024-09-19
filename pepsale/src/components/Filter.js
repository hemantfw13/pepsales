import React, { useState } from 'react';

const Filter = ({ attributes, onFilter }) => {
  const [selectedAttributes, setSelectedAttributes] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedAttributes([...selectedAttributes, value]);
  };

  const handleFilter = () => {
    onFilter(selectedAttributes);
  };

  return (
    <div>
      <h3>Filter Blocks</h3>
      <select onChange={handleChange}>
        {attributes.map((attr, index) => (
          <option key={index} value={attr}>
            {attr}
          </option>
        ))}
      </select>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
