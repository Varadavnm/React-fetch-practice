import React, { useState, useEffect } from 'react';
import './countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital", {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setCountries(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }, []);

  const displayCapital = (event) => {
    const selectedCountryName = event.target.value;
    const selectedCountry = countries.find((country) => country.name === selectedCountryName);
    setSelectedCountry(selectedCountry);
  };

  return (
    <div className="container">
      <div className="country-list">
        <h1>Countries</h1>
        <label htmlFor="countrySelect">Select a country:</label>
        <select id="countrySelect" value={selectedCountry ? selectedCountry.name : ''} onChange={displayCapital}>
          <option value="" disabled>
            Choose a country
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div className={`selected-country ${selectedCountry ? 'show' : ''}`}>
          <p className="scrolling-text">{selectedCountry.name}</p>
          <p>Capital: {selectedCountry.capital}</p>
        </div>
      )}
    </div>
  );
};

export default Countries;
