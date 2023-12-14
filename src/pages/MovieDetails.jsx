import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom/dist'
import { fetchMovieById } from '../services/api';
import { useHttp } from '../components/hooks/useHttp';



const MovieDetails = () => {

  // const params = useParams();
  const { movieId } = useParams();
  console.log(movieId)
  const navigate = useNavigate()
  const [movie] = useHttp(fetchMovieById, movieId)
  // const [movie, setMovie] = useState('');
  // useEffect(() => {
  //   fetchMovieById(movieId).then(res => setMovie(res))
  // }, [movieId])

  if (!movie) return <h1>Loading...</h1>

  const handleGoBack = () => {
    navigate('/movies')
  }

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <p>{movie?.title}</p>
      <hr />
      <Link to='info'>Info by muvie</Link>
      <Link to='actors'>Actors</Link>
      <Outlet />
    </div>
  )
}

export default MovieDetails