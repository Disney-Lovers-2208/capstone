import axios from "axios";

//Action Type
const SET_FAVORITE_TV = "SET_FAVORITE_TV";
const GET_SINGLE_TV = "GET_SINGLE_TV";

//Action Creator
const setFavoriteTv = (tv) => {
  return {
    type: SET_FAVORITE_TV,
    tv,
  };
};

const getSingleTv = (tv) => {
  return {
    type: GET_SINGLE_TV,
    tv,
  }
}

//Thunk
export const fetchFavoriteTv = (userId) => {
  return async (dispatch) => {
    try {
      const { data: tv } = await axios.get(`/api/userTvs/favoriteTv/${userId}`);
      dispatch(setFavoriteTv(tv));
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
    } catch(error) {
      return error;
    }
  };
};

//reducer
export default function tvReducer(state = {}, action) {
  switch (action.type) {
    case SET_FAVORITE_TV:
      return action.tv;
    case GET_SINGLE_TV:
      return action.tv;
    default:
      return state;
  }
}
