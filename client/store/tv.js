import axios from "axios";
import clearMovie from "./movie";

// Action Type:
const GET_SINGLE_TV = "GET_SINGLE_TV";


// Action creator:
const getSingleTv = (tv, rating) => {
  return {
    type: GET_SINGLE_TV,
    tv,
    rating,
  };
};


// thunks:
export const fetchSingleTv = (id) => {
  return async (dispatch) => {
    try {
      const { data: tv } = await axios.get(`/api/tvs/${id}`);
      const { data: rating } = await axios.get(`/api/starRatings/tvs/${id}`);
      dispatch(getSingleTv(tv, rating));
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
