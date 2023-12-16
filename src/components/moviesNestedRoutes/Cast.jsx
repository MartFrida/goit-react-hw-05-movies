import React from 'react'
import { useParams } from 'react-router-dom';
import { useHttp } from '../hooks/useHttp';
import { fetchMovieByIdCast } from '../../services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [movieData] = useHttp(fetchMovieByIdCast, movieId)

  if (!movieData) return <h1>Loading...</h1>
  // console.log(movieData?.cast)

  return (
    <div>
      <ul>
        {movieData.cast.map(actor => <li key={actor.id}>
          <img src={actor.profile_path} alt={actor.original_name} />
          <p>{actor.character}</p>
          <p>{actor.name}</p>
        </li>)}
      </ul>
    </div>
  )
}

export default Cast