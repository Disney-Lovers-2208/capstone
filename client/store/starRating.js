import axios from "axios";

// action type:
const SET_TV_RATING = "SET_TV_RATING";
const SET_BOOK_RATING = "SET_BOOK_RATING";
const SET_MOVIE_RATING = "SET_MOVIE_RATING";

// action creators:
export const getTvRating = (rating) => {
  return {
    type: SET_TV_RATING,
    rating,
  };
};

export const getBookRating = (rating) => {
  return {
    type: SET_BOOK_RATING,
    rating,
  };
};

export const getMovieRating = (rating) => {
  return {
    type: SET_MOVIE_RATING,
    rating,
  };
};

// thunks:
export const fetchTvRating = (tvId) => {
  return async (dispatch) => {
    try {
      const { data: rating } = await axios.get(`/api/starRatings/tvs/${tvId}`);
      dispatch(getTvRating(rating));
    } catch (error) {
      return error;
    }
  };
};

export const fetchBookRating = (id) => {
  return async (dispatch) => {
    try {
      const { data: rating } = await axios.get(`/api/starRatings/books/${id}`);
      dispatch(getBookRating(rating));
    } catch(error) {
      return error;
    }
  };
};

export const fetchMovieRating = (id) => {
  return async (dispatch) => {
    try {
      const { data: rating } = await axios.get(`/api/starRatings/movies/${id}`);
      dispatch(getMovieRating(rating));
    } catch (error) {
      return error;
    }
  };
};

// reducer:
export default function starRating(state = {}, action) {
    switch(action.type) {
    case SET_TV_RATING:
      return action.rating;
    case SET_BOOK_RATING:
      return action.rating;
    case SET_MOVIE_RATING:
      return action.rating;
    default:
        return state;
    }
}