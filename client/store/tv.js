import axios from "axios";

// Action Type:
const GET_SINGLE_TV = "GET_SINGLE_TV";

// Action creator:
const getSingleTv = (tv) => {
  return {
    type: GET_SINGLE_TV,
    tv,
  };
};

// thunks:
export const fetchSingleTv = (id) => {
  return async (dispatch) => {
    try {
      const { data: tv } = await axios.get(`/api/tvs/${id}`);
      const { data: rating } = await axios.get(`/api/starRatings/tvs/${id}`);
      tv.starRating = rating;
      dispatch(getSingleTv(tv));
    } catch (error) {
      return error;
    }
  };
};

//reducer
export default function tvReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_TV:
      return action.tv;
    default:
      return state;
  }
}
