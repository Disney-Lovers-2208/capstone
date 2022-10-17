import axios from "axios";

const GET_USER_BOOK = "GET_USER_BOOK";
const UPDATE_USER_BOOK = "UPDATE_USER_BOOK";

const getUserBook = (userBook) => {
  return {
    type: GET_USER_BOOK,
    userBook,
  };
};

const updateUserBook = (userBook) => {
  return {
    type: UPDATE_USER_BOOK,
    userBook,
  };
};

export const fetchUserBook = (userBook) => {
  const { userId, bookId } = userBook;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/userBooks/${userId}/${bookId}`);
      dispatch(getUserBook(data));
    } catch (error) {
      return error;
    }
  };
};

export const fetchUpdateUserBook = (userBook) => {
  const { userId, bookId } = userBook;
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/userBooks/${userId}/${bookId}`,
        userBook
      );
      dispatch(updateUserBook(data));
    } catch (error) {
      return error;
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER_BOOK:
      return action.userBook;
    case UPDATE_USER_BOOK:
      return action.userBook;
    default:
      return state;
  }
}
