import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Reviews from './moviesNestedRoutes/Reviews';
import Cast from './moviesNestedRoutes/Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
