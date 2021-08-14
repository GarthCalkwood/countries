import React from 'react'

const SearchResults = ({results}) => {
  
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