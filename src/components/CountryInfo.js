import React from 'react'

const CountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        Capital: {country.capital} <br/>
        Population: {country.population}
      </div>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt={`Flag of ${country.name}`} width={300} height={200}/>
    </div>
    
  )
}

export default CountryInfo