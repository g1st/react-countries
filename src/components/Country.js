import React from 'react';

const Country = ({ country: { name, capital, flag, population, region } }) => {
  return (
    <li className="country">
      <img src={flag} alt={`Flag of ${name}`} />
      <div className="info">
        <h2>{name}</h2>
        <div>
          <span>Population: </span>
          {population}
        </div>
        <div>
          <span>Region: </span>
          {region}
        </div>
        <div>
          <span>Capital: </span>
          {capital}
        </div>
      </div>
    </li>
  );
};

export default Country;
