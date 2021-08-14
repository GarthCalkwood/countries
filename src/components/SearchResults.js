import React from 'react'

const SearchResults = ({results, handleClick}) => {
  console.log('results: ', results)

  if (results.length === 0){
    return <div>No Results</div>
  }

  const output = results.map(result => 
    <div key={result.name}>
      {result.name}
      <button type="button" country={result} onClick={(event) => handleClick(event, result)}>Show</button> 
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