export const filterCountries = (countries, searchVal) => {
  return countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchVal.toLowerCase())
  );
};
