import axios from "axios";

// action type:
const CREATE_STAR_RATING = "CREATE_STAR_RATING";

// action creators:
export const _createStarRating = (starRating) => {
  return {
    type: CREATE_STAR_RATING,
    starRating,
  };
};

//thunks:
export const createStarRating = (starRating) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(
        `/api/starRatings`,
        starRating
      );
      dispatch(_createStarRating(created));
    } catch (error) {
      return error;
    }
  };
};

//reducer:
export default function starRatings(state = [], action) {
  switch (action.type) {
    case CREATE_STAR_RATING:
      return [...state, action.starRating];
    default:
      return state;
  }
}
