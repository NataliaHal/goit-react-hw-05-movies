import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'helpers/api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetch() {
      try {
        const { results } = await getTrendMovies();
        setTrendMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trendMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}/{movie.id}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
