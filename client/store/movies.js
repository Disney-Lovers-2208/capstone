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
  dispatch({ type: "INC" });
  const { data } = await axios.get("/api/movies");
  dispatch({ type: "DEC" });
  dispatch(setMovies(data));
};

export const fetchCreateMovie = (movie, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "INC" });
      const { data: created } = await axios.post(`/api/movies`, movie);
      dispatch({ type: "DEC" });
      dispatch(createMovie(created));
      navigate("/movies");
    } catch (error) {
      dispatch({ type: "DEC" });
      return error;
    }
  };
};

// reducer
export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case CREATE_MOVIE:
      return [...state, action.movie];
    case GET_MOVIES:
      return action.movies;
    default:
      return state;
  }
}
