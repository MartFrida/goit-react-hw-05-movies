import React, { useEffect, useState } from 'react'
import { fetchMovieByQuery, fetchTrending } from '../services/api'
import { Link, useSearchParams } from 'react-router-dom/dist';
import { useHttp } from '../components/hooks/useHttp';

const Movies = () => {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetchTrending().then(res => setMovies(res))
  // }, [])
  // console.log(movies)
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  const [movies] = useHttp(fetchMovieByQuery, query)
  // hook useSearchParams

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
            <Link to={movie.id.toString()}> {movie.original_title}</Link>
          </li>
        )}
      </ul>
    </>

  )
}

export default Movies