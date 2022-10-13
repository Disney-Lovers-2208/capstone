import axios from "axios";

// action type:
const GET_BOOKS = "GET_BOOKS";

// action creators:
const setBooks = (books) => ({
  type: GET_BOOKS,
  books,
});

// thunks:
export const fetchBooks = () => async (dispatch) => {
  const { data } = await axios.get("/api/books");
  dispatch(setBooks(data));
};

// reducer
export default function booksReducer(state = [], action) {
    switch (action.type) {
        case GET_BOOKS:
            return action.books;
        default:
            return state;
    }
}
