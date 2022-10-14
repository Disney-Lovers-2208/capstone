import axios from "axios";

//Action Type
const GET_SINGLE_TV = "GET_SINGLE_TV";
const CREATE_TV = "CREATE_TV";

//Action Creator
const createTv = (tv) => {
  return {
    type: CREATE_TV,
    tv,
  };
};

const getSingleTv = (tv) => {
  return {
    type: GET_SINGLE_TV,
    tv,
  };
};

//Thunk
export const fetchCreateTv = (tv) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(`/api/tvs`, tv);
      dispatch(createTv(created));
    } catch (error) {
      return error;
    }
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
    case CREATE_TV:
      return [...state, action.tv];
    case GET_SINGLE_TV:
      return action.tv;
    default:
      return state;
  }
}
