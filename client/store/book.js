import axios from "axios";

// ACTION TYPE
const GET_SINGLE_BOOK = "SET_SINGLE_BOOK";

const getSingleBook = (book) => {
  return {
    type: GET_SINGLE_BOOK,
    book,
  };
};

export const fetchSingleBook = (id) => {
  return async (dispatch) => {
    try {
      const { data: book } = await axios.get(`/api/books/${id}`);
      const { data: rating } = await axios.get(`/api/starRatings/books/${id}`);
      book.starRating = rating;
      dispatch(getSingleBook(book));
    } catch (error) {
      return error;
    }
  };
};


// REDUCER
export default function bookReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_BOOK:
      return action.book;
    default:
      return state;
  }
}
