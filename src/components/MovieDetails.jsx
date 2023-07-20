import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  // Place the code here to fetch and display the movie details based on movieId

  return (
    <div>
      <h1>Movie Details - {movieId}</h1>
      {/* Place the code here to display the movie details */}
    </div>
  );
};

export default MovieDetails;
