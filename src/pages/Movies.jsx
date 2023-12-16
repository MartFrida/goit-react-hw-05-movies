import React, { useState } from 'react'
import { fetchMovieByQuery } from '../services/api'
import { Link, useLocation, useSearchParams } from 'react-router-dom/dist';
import { useHttp } from '../components/hooks/useHttp';

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  const [movies] = useHttp(fetchMovieByQuery, query)
  const location = useLocation()
  const [value, setValue] = useState('')
  const handleSetSearchQuery = () => {
    setSearchParams(value ? { query: value } : {})
  }

  return (
    <>
      <div>
        <input value={value} onChange={e => setValue(e.target.value)} type='text' />
        <button onClick={(handleSetSearchQuery)}>Search movies...</button>
      </div>
      <ul>
        {movies?.map(movie =>
          <li key={movie.id}>
            <Link state={{ from: location }} to={movie.id.toString()}> {movie.original_title}</Link>
          </li>
        )}
      </ul>
    </>

  )
}

export default Movies