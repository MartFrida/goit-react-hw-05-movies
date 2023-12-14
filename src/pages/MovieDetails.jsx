import React from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom/dist'
import { fetchMovieById } from '../services/api';
import { useHttp } from '../components/hooks/useHttp';



const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId)
  const navigate = useNavigate()
  const [movie] = useHttp(fetchMovieById, movieId)

  if (!movie) return <h1>Loading...</h1>

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <p>{movie?.title}</p>
      <hr />
      <Link to='cast'>Actors</Link>
      <Link to='reviews'>Reviews</Link>
      <Outlet />
    </div>
  )
}

export default MovieDetails