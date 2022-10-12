import axios from "axios";

// ACTION TYPE
const SET_FAVORITE_BOOK = "SET_FAVORITE_BOOK";

const setFavoriteBook = (book) => {
  return {
    type: SET_FAVORITE_BOOK,
    book,
  };
};

// THUNK CREATOR
export const fetchFavoriteBook = (userId) => {
  return async (dispatch) => {
    try {
      const { data: book } = await axios.get(
        `/api/userBooks/favoriteBook/${userId}`
      );
      dispatch(setFavoriteBook(book));
    } catch (error) {
      return error;
    }
  };
};

// REDUCER
export default function bookReducer(state = {}, action) {
  switch (action.type) {
    case SET_FAVORITE_BOOK:
      return action.book;
    default:
      return state;
  }
}
