import axios from "axios"

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = '85e6bdfb8ec7cb55f85ebb0c0a551952'
const options = {
  params: {
    api_key: API_KEY,
  }
}

export const fetchTrending = async () => {
  // const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`)
  const { data } = await axios.get(`trending/movie/day`, options)
  return data.results
}

export const fetchMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`, options)
  console.log(data)
  return data
}

export const fetchMovieByQuery = async query => {
  const { data } = await axios.get(`search/movie?query=${query}`, options)
  return data.results
}

// movie?query=
// https://api.themoviedb.org/3/trending/movie
// https://api.themoviedb.org/3/search/movie
// https://api.themoviedb.org/3/movie/{movie_id}
// https://api.themoviedb.org/3/movie/{movie_id}/credits
// https://api.themoviedb.org/3/movie/{movie_id}/reviews
