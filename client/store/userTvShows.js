import axios from "axios";

const CREATE_USER_TV = "CREATE_USER_TV";

const createUserTv = (userTv) => {
  return {
    type: CREATE_USER_TV,
    userTv,
  };
};

export const fetchCreateUserTv = (userTv) => {
  console.log(userTv);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/userTvs`, userTv);
      dispatch(createUserTv(data));
    } catch (error) {
      return error;
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_USER_TV:
      return [...state, action.userTv];
    default:
      return state;
  }
}
