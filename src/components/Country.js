import React from 'react';

const Country = ({
  country: {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  },
  handleClick,
}) => {
  return (
    <div>
      <button onClick={() => handleClick(null)}>back</button>
      <img src={flag} alt={`Flag of ${name}`} />
      <h2>{name}</h2>
      <div>
        <span>Native Name: </span>
        {nativeName}
      </div>
      <div>
        <span>Population: </span>
        {population}
      </div>
      <div>
        <span>Region: </span>
        {region}
      </div>
      <div>
        <span>Sub Region: </span>
        {subregion}
      </div>
      <div>
        <span>Capital: </span>
        {capital}
      </div>
      <div>
        <span>Top Level Domain: </span>
        {topLevelDomain.join(', ')}
      </div>
      <div>
        <span>Currencies: </span>
        {currencies.map((currency) => currency.name).join(', ')}
      </div>
      <div>
        <span>Languages: </span>
        {languages.map((language) => language.name).join(', ')}
      </div>
      <div>
        <h3>Border Countries:</h3>
        {borders.map((border) => (
          <button key={border} onClick={() => handleClick(border)}>
            {border}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Country;
