import React from 'react'
import { useParams } from 'react-router-dom';
import { useHttp } from '../hooks/useHttp';
import { BASE_URL_FOR_IMG, fetchMovieByIdCast } from '../../services/api';
import styled from 'styled-components';

const Cast = () => {
  const { movieId } = useParams();
  const [movieData] = useHttp(fetchMovieByIdCast, movieId)

  if (!movieData) return <h1>Loading...</h1>
  // console.log(movieData?.cast)

  return (
    <StyledActorCart>
      <ul>
        {movieData.cast.map(actor => <li key={actor.id}>
          <img src={BASE_URL_FOR_IMG + actor.profile_path} alt={actor.original_name} />
          <p>{actor.character}</p>
          <p>{actor.name}</p>
        </li>)}
      </ul>
    </StyledActorCart>
  )
}

export default Cast

const StyledActorCart = styled.div`
ul{
  display: flex;
  flex-direction: column;
  list-style: none;
  flex-wrap: wrap;
  gap: 5px;
}
li{
 
 
}
img{
  width:70px;
  border: 50%;
}
`