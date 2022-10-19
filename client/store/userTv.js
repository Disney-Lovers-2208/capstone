import axios from "axios";

const GET_USER_TV = "GET_USER_TV";
const UPDATE_USER_TV = "UPDATE_USER_TV";

const getUserTv = (userTv) => {
  return {
    type: GET_USER_TV,
    userTv,
  };
};

const updateUserTv = (userTv) => {
  return {
    type: UPDATE_USER_TV,
    userTv,
  };
};

export const fetchUserTv = (userTv) => {
  const { userId, tvId } = userTv;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/userTvs/${userId}/${tvId}`);
      dispatch(getUserTv(data));
    } catch (error) {
      return error;
    }
  };
};

export const fetchUpdateUserTv = (userTv) => {
  const { userId, tvId } = userTv;
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/userTvs/${userId}/${tvId}`,
        userTv
      );
      dispatch(updateUserTv(data));
    } catch (error) {
      return error;
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER_TV:
      return action.userTv;
    case UPDATE_USER_TV:
      return action.userTv;
    default:
      return state;
  }
}
