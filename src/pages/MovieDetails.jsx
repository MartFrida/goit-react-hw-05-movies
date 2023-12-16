import React, { Suspense, useRef } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchMovieById } from '../services/api';
import { useHttp } from '../components/hooks/useHttp';
import styled from 'styled-components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation()
  console.log(location)
  const goBackRef = useRef(location.state?.from || '/')
  const [movie] = useHttp(fetchMovieById, movieId)
  console.log(movie)
  if (!movie) return <h1>Loading...</h1>

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
        <StyledList>
          <Link to='cast'>Actors</Link>
          <Link to='reviews'>Reviews</Link>
          <Suspense fallback={<h2>Loading second Suspense</h2>}>
            <Outlet />
          </Suspense>
        </StyledList>
      </div>
    </>
  )
}

export default MovieDetails

const StyledList = styled.div`
a{
  margin: 10px;
}
`