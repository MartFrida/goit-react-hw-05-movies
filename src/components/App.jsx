import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import InfoDetails from './moviesNestedRoutes/InfoDetails';
import Actors from './moviesNestedRoutes/Actors';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='info' element={<InfoDetails />} />
            <Route path='actors' element={<Actors />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
