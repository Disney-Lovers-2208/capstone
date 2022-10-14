import axios from "axios";

// ACTION TYPE
const GET_SINGLE_BOOK = "SET_SINGLE_BOOK";
const CREATE_BOOK = "CREATE_BOOK";

const getSingleBook = (book) => {
  return {
    type: GET_SINGLE_BOOK,
    book,
  };
};

export const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    book,
  };
};

export const fetchCreateBook = (book) => {
  console.log("in fetchCreate book", book);
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(`/api/books`, book);
      dispatch(created);
    } catch (error) {
      return error;
    }
  };
};

export const fetchSingleBook = (id) => {
  return async (dispatch) => {
    try {
      const { data: book } = await axios.get(`/api/books/${id}`);
      dispatch(getSingleBook(book));
    } catch (error) {
      return error;
    }
  };
};


// REDUCER
export default function bookReducer(state = [], action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case GET_SINGLE_BOOK:
      return action.book;
    default:
      return state;
  }
}
