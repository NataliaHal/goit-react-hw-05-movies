import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'helpers/api';
import * as S from 'pages/MovieDetails/MovieDetails.styled';
import { BiArrowBack } from 'react-icons/bi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const url = 'https://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);

  const getYearMovie = date => {
    const dateMovie = new Date(date);
    const year = dateMovie.getFullYear();
    return year;
  };

  return (
    <div>
      <S.Wrapper>
        <BiArrowBack />
        <S.LinkTo to={backLinkLocationRef.current}>GO BACK</S.LinkTo>
      </S.Wrapper>
      <S.Article>
        <img
          src={movie.poster_path ? url + movie.poster_path : ''}
          alt={movie.title}
          width="350"
          height="450"
        />
        <div>
          <S.Title>
            {movie.title}({getYearMovie(movie.release_date)})
          </S.Title>
          <p>User Score: {(movie.vote_average * 10).toFixed()}%</p>
          <S.Title>Overview</S.Title>
          <S.Text>{movie.overview}</S.Text>
          <S.Title>Genres</S.Title>
          <S.Text>
            {movie.genres
              ? movie.genres.map(genre => genre.name).join(' ')
              : ''}
          </S.Text>
        </div>
      </S.Article>
      <section>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default MovieDetails;
