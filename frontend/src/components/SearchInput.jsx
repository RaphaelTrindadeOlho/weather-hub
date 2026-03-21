import React from 'react'
import { useState } from 'react'

export const SearchInput = ({onSearch}) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input 
        className="input input-bordered"
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
      />
      <button className="btn btn-primary">Buscar</button>
    </form>
  )
}

export default SearchInput