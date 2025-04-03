import React, { useEffect, useState } from "react";
import { fetchCity, fetchCountry, fetchState } from "../server/Fetchers";

const LocationSelections = () => {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const [countryValue, setCountryValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [cityValue, setCityValue] = useState("");

  const fetchCountries = async () => {
    const country = await fetchCountry();
    setCountry(country || []);
  };
  const fetchStates = async (country) => {
    const state = await fetchState(country);
    setState(state || []);
  };
  const fetchCities = async (country, state) => {
    const city = await fetchCity(country, state);
    setCity(city || []);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (countryValue) {
      fetchStates(countryValue);
    }
  }, [countryValue]);
  useEffect(() => {
    if (countryValue && stateValue) {
      fetchCities(countryValue, stateValue);
    }
  }, [countryValue, stateValue]);
  console.log(countryValue, stateValue);
  return (
    <div>
      <h2>Select Location</h2>
      <span style={{ display: "flex", gap: "3rem", justifyContent: "center" }}>
        <select
          style={{ width: "20rem", height: "2rem", borderRadius: "2px" }}
          // disabled={true}
          name="Country"
          value={countryValue}
          onChange={(e) => {
            setCountryValue(e.target.value);
            setStateValue("");
            setState([]);
            setCityValue("");
            setCity([]);
          }}
        >
          {" "}
          <option value={""} disabled={true}>
            {"Select Country"}
          </option>
          {country.map((countries) => {
            return (
              <option value={countries} key={countries}>
                {countries}
              </option>
            );
          })}
        </select>

        <select
          style={{ width: "8rem", height: "2rem", borderRadius: "2px" }}
          disabled={!countryValue}
          name="State"
          value={stateValue}
          onChange={(e) => {
            setStateValue(e.target.value);
            setCityValue("");
            setCity([]);
          }}
        >
          {" "}
          <option value={""} disabled={true}>
            {"Select State"}
          </option>
          {state.map((states) => {
            return (
              <option value={states} key={states}>
                {states}
              </option>
            );
          })}
        </select>
        <select
          style={{ width: "8rem", height: "2rem", borderRadius: "2px" }}
          disabled={!countryValue || !stateValue}
          name="City"
          value={cityValue}
          onChange={(e) => {
            setCityValue(e.target.value);
          }}
        >
          {" "}
          <option value={""} disabled={true}>
            {"Select City"}
          </option>
          {city.map((cities) => {
            return (
              <option value={cities} key={cities}>
                {cities}
              </option>
            );
          })}
        </select>
      </span>
      <div style={{ marginTop: "2rem" }}>
        {cityValue && stateValue && countryValue && (
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            You selected <b style={{ fontSize: "1.4rem" }}>{cityValue}</b>,
            <span
              style={{ color: "grey" }}
            >{` ${stateValue}, ${countryValue}`}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LocationSelections;
