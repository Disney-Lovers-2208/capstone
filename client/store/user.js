import axios from "axios";

// ACTION TYPE
const SET_USER = "SET_USER";

// ACTION CREATOR
const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

// THUNK CREATOR
export const fetchUser = (userId) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.get(`/api/users/${userId}`);
      console.log("in fetch user ", user);
      dispatch(setUser(user));
    } catch (error) {
      return error;
    }
  };
};

// REDUCER
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
