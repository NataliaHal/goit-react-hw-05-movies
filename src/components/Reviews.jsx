import React from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  // Place the code here to fetch and display the movie's reviews

  return (
    <div>
      <h1>Reviews - {movieId}</h1>
      {/* Place the code here to display the movie's reviews */}
    </div>
  );
};

export default Reviews;
