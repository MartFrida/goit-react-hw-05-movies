import React, { Suspense, useRef } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { BASE_URL_FOR_IMG, fetchMovieById } from '../services/api';
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
      <Link to={goBackRef.current}>
        <StyledButton>
          Go back to movies!
        </StyledButton>
      </Link>
      <StyleMovieCard>
        <img src={BASE_URL_FOR_IMG + poster_path} alt={title} />
        <div>
          <h1>{title}</h1>
          <p>Release date: {release_date}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(genre => { return <li key={genre.id}>{genre.name}</li> })}
          </ul>
        </div>
      </StyleMovieCard>
      <hr />
      <StyledList>
        <Link to='cast'>Actors</Link>
        <Link to='reviews'>Reviews</Link>
      </StyledList>
      <Suspense fallback={<h2>Loading second Suspense</h2>}>
        <Outlet />
      </Suspense>

    </>
  )
}

export default MovieDetails

const StyledList = styled.div`
a{
  margin: 10px;
}
`
const StyledButton = styled.button`
margin:10px;
padding: 10px;
`
const StyleMovieCard = styled.div`
display: flex;
    flex-direction: row;
padding: 10px;
    img{
      width: 40%;
      margin-right: 10px;
    }
    h1{
      margin-top: 0;
    }
`