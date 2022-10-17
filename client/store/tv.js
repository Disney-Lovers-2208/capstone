import axios from "axios";

//Action Type
const GET_SINGLE_TV = "GET_SINGLE_TV";
const SET_FAVORITE_TV = "SET_FAVORITE_TV";

const getSingleTv = (tv) => {
  return {
    type: GET_SINGLE_TV,
    tv,
  };
};

export const fetchSingleTv = (id) => {
  return async (dispatch) => {
    try {
      const { data: tv } = await axios.get(`/api/tvs/${id}`);
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
