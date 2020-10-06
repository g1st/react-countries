import React from 'react';
import Country from './Country';

const Countries = ({ countries }) => {
  return (
    <ul className="countries">
      {countries.map((country) => (
        <Country className="countries" key={country.name} country={country} />
      ))}
    </ul>
  );
};

export default Countries;
