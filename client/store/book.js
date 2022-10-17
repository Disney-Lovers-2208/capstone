import axios from "axios";

// ACTION TYPE
const GET_SINGLE_BOOK = "SET_SINGLE_BOOK";
// const SET_BOOK_RATING = "SET_BOOK_RATING";

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
      dispatch(getSingleBook(book));
    } catch (error) {
      return error;
    }
  };
};

// export const getBookRating = (rating) => {
//   return {
//     type: SET_BOOK_RATING,
//     rating,
//   };
// };

// export const fetchBookRating = (id) => {
//   return async (dispatch) => {
//     try {
//       const { data: rating } = await axios.get(`/api/starRatings/books/${id}`);
//       dispatch(getBookRating(rating));
//     } catch(error) {
//       return error;
//     }
//   };
// };


// REDUCER
export default function bookReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_BOOK:
      return action.book;
    // case SET_BOOK_RATING:
    //   return action.rating;
    default:
      return state;
  }
}
