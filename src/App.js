import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import CountryInfo from './components/CountryInfo'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [viewedCountry, setViewedCountry] = useState(null)

  // Updates the search state
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleClick = (event, country) => {
    console.log(country.name)
    setViewedCountry(country)
  }

  // Returns an array of the filtered countries
  const getSearchResults = () => {
    return (
      countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
    )
  }

  // Get data from API
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all/')
      .then(response => setCountries(response.data))
  }, [])

  // For debugging
  useEffect(() => {
    console.log('countries: ', countries)
  }, [countries])

  const display = () => {
    if (viewedCountry === null) {
      return <SearchResults results={getSearchResults()} handleClick={handleClick} />
    } else {
      return (
        <div>
          <button onClick={() => setViewedCountry(null)}>back</button>
          <CountryInfo country={viewedCountry} />
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
