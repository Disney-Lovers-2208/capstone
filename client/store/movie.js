import axios from "axios";

// ACTION TYPE
const GET_SINGLE_MOVIE = "GET_SINGLE_MOVIE";
const CREATE_MOVIE = "CREATE_MOVIE";

const getSingleMovie = (movie) => {
  return {
    type: GET_SINGLE_MOVIE,
    movie,
  };
};

export const createMovie = (movie) => {
  return {
    type: CREATE_MOVIE,
    movie,
  };
};

export const fetchSingleMovie = (id) => {
  return async (dispatch) => {
    try {
      const { data: movie } = await axios.get(`/api/movies/${id}`);
      dispatch(getSingleMovie(movie));
    } catch (error) {
      return error;
    }
  };
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

// REDUCER
export default function movieReducer(state = [], action) {
  switch (action.type) {
    case CREATE_MOVIE:
      return [...state, action.movie];
    case GET_SINGLE_MOVIE:
      return action.movie;
    default:
      return state;
  }
}
