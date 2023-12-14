import React from 'react'
import { useParams } from 'react-router-dom';
import { useHttp } from '../hooks/useHttp';
import { fetchMovieByIdReviews } from '../../services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews] = useHttp(fetchMovieByIdReviews, movieId)
  if (!movieReviews) return <h1>Loading...</h1>
  console.log(movieReviews?.results)
  return (
    <div>
      <ul>
        {movieReviews.results.map((review, index) => <li key={index}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>)}
      </ul>
    </div>
  )
}

export default Reviews