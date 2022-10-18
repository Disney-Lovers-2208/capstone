import axios from "axios";

const CREATE_USER_BOOK = "CREATE_USER_BOOK";

const createUserBook = (userBook) => {
  return {
    type: CREATE_USER_BOOK,
    userBook,
  };
};

export const fetchCreateUserBook = (userBook) => {
  console.log(userBook);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/userBooks`, userBook);
      dispatch(createUserBook(data));
    } catch (error) {
      return error;
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_USER_BOOK:
      return [...state, action.userBook];
    default:
      return state;
  }
}
