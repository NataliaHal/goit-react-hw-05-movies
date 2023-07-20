import { useState, useEffect } from 'react';
import { getAddition } from 'helpers/api';
import { useParams } from 'react-router-dom';
import * as S from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const { results } = await getAddition(movieId, 'reviews');
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);
  return (
    <section>
      {reviews.length === 0 && <p>We don`t have any reviews for this movie</p>}
      <ul>
        {reviews.map(review => {
          return (
            <S.Item key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </S.Item>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
