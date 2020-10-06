import React from 'react';

const Filter = ({ regions, handleFilter }) => {
  const handleSelect = (e) => {
    const { value } = e.target;
    handleFilter(value);
  };

  return (
    <div className="region-filter">
      <select name="countryFilter" id="countryFilter" onChange={handleSelect}>
        <option value="default">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
