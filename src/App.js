import React,
{
  useEffect,
  useState
}
from "react";

import "./App.css";

function App() {

  const [countries, setCountries] =
    useState([]);

  const [search, setSearch] =
    useState("");

  // FETCH API

  useEffect(() => {

    fetch(
      "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        setCountries(data);
      })

      .catch((error) => {

        console.error(error);
      });

  }, []);

  // FILTER COUNTRIES

  const filteredCountries =
    countries.filter(
      (country) =>

        country.common
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (

    <div className="App">

      {/* SEARCH BAR */}

      <input
        type="text"
        placeholder="Search for countries..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      {/* COUNTRY CARDS */}

      <div className="countries-container">

        {filteredCountries.map(
          (country) => (

            <div
              className="countryCard"
              key={country.common}
            >

              <img
                src={country.png}
                alt={
                  country.common
                }
              />

              <h3>
                {country.common}
              </h3>

            </div>
          )
        )}

      </div>

    </div>
  );
}

export default App;