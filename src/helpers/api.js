import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',

    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGY0NzRkMTE5NGIzNjlhZTc1MzFmNTBhNDM1NTA2YyIsInN1YiI6IjY0OTc0MzE0ZWI3OWMyMDBjNTZkNmY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xcsy2n0hTAWYEvaWVUI6qzFMwM0PuPy5o3c_EsP1eMg',
    // Authorization: 'Bearer 2df474d1194b369ae7531f50a435506c',
  },
};
export const getTrendMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?language=en-US`,
    options
  );

  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?language=en-US`, options);
  return data;
};

export const getAddition = async (id, params) => {
  const { data } = await axios.get(
    `movie/${id}/${params}?language=en-US`,
    options
  );
  return data;
};
