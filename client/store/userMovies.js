import axios from "axios";

const CREATE_USER_MOVIE = "CREATE_USER_MOVIE";

const createUserMovie = (userMovie) => {
  return {
    type: CREATE_USER_MOVIE,
    userMovie,
  };
};

export const fetchCreateUserMovie = (userMovie) => {
  console.log(userMovie);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/userMovies`, userMovie);
      dispatch(createUserMovie(data));
    } catch (error) {
      return error;
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_USER_MOVIE:
      return [...state, action.userMovie];
    default:
      return state;
  }
}
