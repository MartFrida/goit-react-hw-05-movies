import React from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom/dist'
import { fetchMovieById } from '../services/api';
import { useHttp } from '../components/hooks/useHttp';



const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId)
  const navigate = useNavigate()
  const [movie] = useHttp(fetchMovieById, movieId)
  // console.log(movie)
  if (!movie) return <h1>Loading...</h1>

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <>
      <button onClick={handleGoBack}>Go back</button>
      <div>
        <img src={movie?.backdrop_path} alt={movie?.title} />
        <h1>{movie?.title}</h1>
        <p>Release date: {movie?.release_date}</p>
        <h2>Overview</h2>
        <p>{movie?.overview}</p>
        <h2>Genres</h2>
        <ul>
          {movie?.genres.map(genre => { return <li key={genre.id}>{genre.name}</li> })}
        </ul>
        {/* <p>{movie?.overview}</p> */}
        <hr />
        <Link to='cast'>Actors</Link>
        <Link to='reviews'>Reviews</Link>
        <Outlet />
      </div>
    </>

  )
}

export default MovieDetails