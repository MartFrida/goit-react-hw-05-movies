import React, { useEffect, useState } from 'react'
import { fetchTrending } from '../services/api'
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrending().then(res => setMovies(res))
  }, [])
  console.log(movies)

  return (
    <ul>
      {movies.map(movie =>
        <li key={movie.id}>
          <Link to={`movies/${movie.id.toString()}`}> {movie.original_title}</Link>
        </li>
      )}
    </ul>
  )
}

export default Home