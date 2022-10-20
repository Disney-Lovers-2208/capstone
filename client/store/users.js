import axios from "axios";

// ACTION TYPE
const GET_ALL_USERS = "GET_ALL_USERS";
const ADD_FRIEND = "ADD_FRIEND";

// ACTION CREATOR
const _getAllUsers = (users) => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};

const _addFriend = (friend) => {
  return {
    type: ADD_FRIEND,
    friend,
  }
}

// THUNK CREATOR
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const { data: users } = await axios.get("/api/users");
      dispatch(_getAllUsers(users));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
export default function users(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    case ADD_FRIEND:
      return [...state, action.friend]
    default:
      return state;
  }
}
