import axios from "axios";

// action type:
const GET_MOVIES = "GET_MOVIES";
const CREATE_MOVIE = "CREATE_MOVIE";

// action creators:
const setMovies = (movies) => ({
  type: GET_MOVIES,
  movies,
});

export const createMovie = (movie) => {
  return {
    type: CREATE_MOVIE,
    movie,
  };
};

// thunks:
export const fetchMovies = () => async (dispatch) => {
  const { data } = await axios.get("/api/movies");
  dispatch(setMovies(data));
};

export const fetchCreateMovie = (movie) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(`/api/movies`, movie);
      dispatch(created);
    } catch (error) {
      return error;
    }
  };
};

// reducer
export default function moviesReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_MOVIE:
      return [...state, action.movie];
    case GET_MOVIES:
      return action.movies;
    default:
      return state;
  }
}
