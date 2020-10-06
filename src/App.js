import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Countries from './components/Countries';
import Search from './components/Search';
import { filterCountries } from './helpers';

const App = () => {
  const [lightMode, setLightMode] = useState(true);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let isActive = true;
    setLoading(true);
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          if (isActive) {
            setLoading(false);
            setCountries(data);
          }
        },
        (error) => {
          console.error(error);
          setError(error);
          setLoading(false);
        }
      );
    return () => {
      isActive = false;
    };
  }, []);

  const handleModeChange = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  let countriesComponent;
  if (error) {
    countriesComponent = <div>{error.message}</div>;
  } else if (loading) {
    countriesComponent = <div>Loading...</div>;
  } else {
    let filteredCountries = filterCountries(countries, searchValue);
    countriesComponent = <Countries countries={filteredCountries} />;
  }

  return (
    <div className={lightMode ? 'light' : 'dark'}>
      <Header mode={lightMode} handleChange={handleModeChange} />
      <main>
        <Search handleSearch={handleSearch} />
        {countriesComponent}
      </main>
    </div>
  );
};

export default App;
