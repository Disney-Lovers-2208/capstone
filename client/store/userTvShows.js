import axios from "axios";

const CREATE_USER_TV = "CREATE_USER_TV";
const DELETE_USER_TV = "DELETE_USER_TV";

const createUserTv = (userTv) => {
  return {
    type: CREATE_USER_TV,
    userTv,
  };
};

const deleteUserTv = (userTv) => {
  return {
    type: DELETE_USER_TV,
    userTv,
  };
};

export const fetchCreateUserTv = (userTv) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/userTvs`, userTv);
      dispatch(createUserTv(data));
    } catch (error) {
      return error;
    }
  };
};

export const fetchDeleteUserTv = (userTv) => {
  const { userId, tvId } = userTv;
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(
      `/api/userTvs/${userId}/${tvId}`
    );
    dispatch(deleteUserTv(deleted));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_USER_TV:
      return [...state, action.userTv];
    case DELETE_USER_TV:
      return state.filter((userTv) => userTv.id !== action.userTv.id);
    default:
      return state;
  }
}
