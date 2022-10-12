import axios from "axios";

//Action Type
const SET_FAVORITE_TV = "SET_FAVORITE_TV";

//Action Creator
const setFavoriteTv = (tv) => {
  return {
    type: SET_FAVORITE_TV,
    tv,
  };
};

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

//reducer
export default function tvReducer(state = {}, action) {
  switch (action.type) {
    case SET_FAVORITE_TV:
      return action.tv;
    default:
      return state;
  }
}
