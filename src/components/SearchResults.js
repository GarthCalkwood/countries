import React from 'react'
import CountryInfo from './CountryInfo'

const SearchResults = ({results}) => {
  console.log('results: ', results)

  if (results.length === 0){
    return <div>No Results</div>
  }

  if (results.length === 1){
    console.log('results[0]: ', results[0])
    return <CountryInfo country={results[0]}/>
  }


  const output = results.map(result => 
    <div key={result.name}>
      {result.name}
    </div>
  )

  return (
    <div>
      Results: <br></br>
      {output}
    </div>
  )
}

export default SearchResults