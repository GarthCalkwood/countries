import React from 'react'

const Search = ({value, onChange}) => {

  return (
    <div>
      Find Countries: <input 
        value={value} 
        onChange={onChange}
      />
    </div>
  )
}

export default Search