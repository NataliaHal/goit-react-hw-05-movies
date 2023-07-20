import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAddition } from 'helpers/api';
import * as S from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const url = 'https://image.tmdb.org/t/p/w500';
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const { cast } = await getAddition(movieId, 'credits');
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);
  return (
    <section>
      {cast.length === 0 && <p>We don`t have any cast for this movie</p>}
      <S.CastList>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              {actor.profile_path ? (
                <S.Img
                  src={`${url}${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <S.Img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}
              <S.Name>{actor.name}</S.Name>
              {actor.character && (
                <S.Character>Character: {actor.character}</S.Character>
              )}
            </li>
          );
        })}
      </S.CastList>
    </section>
  );
};

export default Cast;
