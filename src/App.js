import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import SearchResults from './components/SearchResults'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  // Updates the search state
  const handleSearch = (event) => {
    setSearch(event.target.value)
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

  
  return (
    <div>
      <Search 
        value={search}
        onChange={handleSearch}
      />
      <SearchResults results={getSearchResults()} />
    </div>
  );
}

export default App;
