import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import CountryInfo from './components/CountryInfo'
import WeatherInfo from './components/WeatherInfo'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [viewedCountry, setViewedCountry] = useState(null)
  const [weather, setWeather] = useState(null)

  // Updates the search state
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleClick = (event, country) => {
    setViewedCountry(country)
  }

  // Returns an array of the filtered countries
  const getSearchResults = () => {
    return (
      countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
    )
  }

  // Get country data from API
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all/')
      .then(response => setCountries(response.data))
  }, [])

  // Get weather data from API when a country is viewed
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY
    if (viewedCountry != null) {
      const getUrl = `https://api.openweathermap.org/data/2.5/weather?q=${viewedCountry.capital}&appid=${apiKey}`
      axios
        .get(getUrl)
        .then(response => setWeather(response.data))
    }
  }, [viewedCountry])

  const display = () => {
    if (viewedCountry === null || weather === null) {
      return <SearchResults results={getSearchResults()} handleClick={handleClick} />
    } else {
      return (
        <div>
          <button onClick={() => setViewedCountry(null)}>back</button>
          <h1>{viewedCountry.name}</h1>
          <CountryInfo country={viewedCountry} weather={weather}/>
          <h1>Weather in {viewedCountry.capital}</h1>
          <WeatherInfo weather={weather} />
        </div>
      )
    }
  }

  return (
    <div>
      <Search 
        value={search}
        onChange={handleSearch}
      />
      {display()}
    </div>
  );
}

export default App;
