import axios from "axios";

// action type:
const GET_REVIEWS = "GET_REVIEWS";
const CREATE_REVIEW = "CREATE_BOOK_REVIEW";

// action creator:
const _getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

// thunks:
export const getReviews = (productType, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "INC" });
      const { data: reviews } = await axios.get(
        `/api/reviews/${productType}/${id}`
      );
      dispatch({ type: "DEC" });
      dispatch(_getReviews(reviews));
    } catch (error) {
      dispatch({ type: "DEC" });
      return error;
    }
  };
};

export const createReview = (review, productType, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "INC" });
      await axios.post(`/api/reviews`, review);
      dispatch({ type: "DEC" });
      dispatch(getReviews(productType, id));
    } catch (error) {
      dispatch({ type: "DEC" });
      return error;
    }
  };
};

// reducer:
export default function reviews(state = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}
