import axios from "axios";

// ACTION TYPE
const SET_USER = "SET_USER";
const UPDATE_USER = "UPDATE_USER";


// ACTION CREATOR
const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

const _updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});


// THUNK CREATOR
export const fetchUser = (userId) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.get(`/api/users/${userId}`);
      dispatch(setUser(user));
    } catch (error) {
      return error;
    }
  };
};

export const updateUser = (userId, userForm, navigate) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.put(`/api/users/${userId}`, userForm);
      dispatch(_updateUser(user));
      dispatch(me());
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };
};


// REDUCER
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
