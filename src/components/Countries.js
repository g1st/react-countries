import React from 'react';
import CountryCard from './CountryCard';

const Countries = ({ countries }) => {
  return (
    <ul className="countries">
      {countries.map((country) => (
        <CountryCard
          className="countries"
          key={country.name}
          country={country}
        />
      ))}
    </ul>
  );
};

export default Countries;
