import axios from "axios";

// action type:
const GET_BOOKS = "GET_BOOKS";
const CREATE_BOOK = "CREATE_BOOK";

// action creators:
const setBooks = (books) => ({
  type: GET_BOOKS,
  books,
});

const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    book,
  };
};

// thunks:
export const fetchBooks = (helperFunc) => async (dispatch) => {
  const { data } = await axios.get("/api/books");
  dispatch(setBooks(data));
  helperFunc();
};

export const fetchCreateBook = (book) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(`/api/books`, book);
      dispatch(createBook(created));
    } catch (error) {
      return error;
    }
  };
};

// reducer
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case GET_BOOKS:
      return action.books;
    default:
      return state;
  }
}
