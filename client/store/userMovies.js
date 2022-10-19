import axios from "axios";

const CREATE_USER_MOVIE = "CREATE_USER_MOVIE";
const DELETE_USER_MOVIE = "DELETE_USER_MOVIE";

const createUserMovie = (userMovie) => {
  return {
    type: CREATE_USER_MOVIE,
    userMovie,
  };
};

const deleteUserMovie = (userMovie) => {
  return {
    type: DELETE_USER_MOVIE,
    userMovie,
  };
};

export const fetchCreateUserMovie = (userMovie) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/userMovies`, userMovie);
      dispatch(createUserMovie(data));
    } catch (error) {
      return error;
    }
  };
};

export const fetchDeleteUserMovie = (userMovie) => {
  const { userId, movieId } = userMovie;
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(
      `/api/userMovies/${userId}/${movieId}`
    );
    dispatch(deleteUserMovie(deleted));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_USER_MOVIE:
      return [...state, action.userMovie];
    case DELETE_USER_MOVIE:
      return state.filter((userMovie) => userMovie.id !== action.userMovie.id);
    default:
      return state;
  }
}
