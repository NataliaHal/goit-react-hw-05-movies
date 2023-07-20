// src/App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const Movies = lazy(() => import('./components/Movies'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/:movieId" component={MovieDetails} />
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
            {/* If the user enters an invalid route, redirect to the Home page */}
            <Route path="*" component={Home} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
