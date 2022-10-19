import axios from "axios";

const CREATE_USER_BOOK = "CREATE_USER_BOOK";
const DELETE_USER_BOOK = "DELETE_USER_BOOK";

const createUserBook = (userBook) => {
  return {
    type: CREATE_USER_BOOK,
    userBook,
  };
};

const deleteUserBook = (userBook) => {
  return {
    type: DELETE_USER_BOOK,
    userBook,
  };
};

export const fetchCreateUserBook = (userBook) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/userBooks`, userBook);
      dispatch(createUserBook(data));
    } catch (error) {
      return error;
    }
  };
};

export const fetchDeleteUserBook = (userBook) => {
  const { userId, bookId } = userBook;
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(
      `/api/userBooks/${userId}/${bookId}`
    );
    dispatch(deleteUserBook(deleted));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_USER_BOOK:
      return [...state, action.userBook];
    case DELETE_USER_BOOK:
      return state.filter((userBook) => userBook.id !== action.userBook.id);
    default:
      return state;
  }
}
