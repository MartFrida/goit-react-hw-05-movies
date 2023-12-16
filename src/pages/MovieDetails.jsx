import React, { Suspense, useRef } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchMovieById } from '../services/api';
import { useHttp } from '../components/hooks/useHttp';

const MovieDetails = () => {
  const { movieId } = useParams();
  // console.log(movieId)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const goBackRef = useRef(location.state?.from || '/')
  const [movie] = useHttp(fetchMovieById, movieId)
  console.log(movie)
  if (!movie) return <h1>Loading...</h1>

  const handleGoBack = () => {
    navigate('/')
  }
  const { poster_path, title, release_date, overview, genres } = movie;
  return (
    <>
      <Link to={goBackRef.current}>Go back to movies!</Link>
      <div>
        <img src={poster_path} alt={title} />
        <h1>{title}</h1>
        <p>Release date: {release_date}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map(genre => { return <li key={genre.id}>{genre.name}</li> })}
        </ul>
        <hr />
        <Link to='cast'>Actors</Link>
        <Link to='reviews'>Reviews</Link>
        <Suspense fallback={<h2>Loading second Suspense</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </>

  )
}

export default MovieDetails