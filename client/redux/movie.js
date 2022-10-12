import axios from "axios";

// ACTION TYPE
const SET_FAVORITE_MOVIE = "SET_FAVORITE_MOVIE";
const GET_SINGLE_MOVIE = "GET_SINGLE_MOVIE";

const setFavoriteBook = (movie) => {
  return {
    type: SET_FAVORITE_MOVIE,
    movie,
  };
};

const getSingleMovie = (movie) => {
  return {
    type: GET_SINGLE_MOVIE,
    movie,
  }
}

// THUNK CREATOR
export const fetchFavoriteMovie = (userId) => {
  return async (dispatch) => {
    try {
      const { data: movie } = await axios.get(
        `/api/userMovies/favoriteMovie/${userId}`
      );
      dispatch(setFavoriteBook(movie));
    } catch (error) {
      return error;
    }
  };
};

export const fetchSingleMovie = (id) => {
  return async (dispatch) => {
    try{
      const { data: movie } = await axios.get(`/api/movies/${id}`);
      dispatch(getSingleMovie(movie));
    } catch (error) {
      return error;
    }
  };
};

// REDUCER
export default function movieReducer(state = {}, action) {
  switch (action.type) {
    case SET_FAVORITE_MOVIE:
      return action.movie;
    case GET_SINGLE_MOVIE:
      return action.movie;
    default:
      return state;
  }
}
