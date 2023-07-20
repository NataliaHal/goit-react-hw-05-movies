// src/components/Cast.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  // Place the code here to fetch and display the movie's cast

  return (
    <div>
      <h1>Cast - {movieId}</h1>
      {/* Place the code here to display the movie's cast */}
    </div>
  );
};

export default Cast;
