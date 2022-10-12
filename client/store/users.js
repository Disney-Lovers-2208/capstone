import axios from 'axios';

// ACTION TYPE:
const GET_ALL_USERS = "GET_ALL_USERS";

// ACTION CREATOR:
const setAllUsers = (users) => {
    return {
        type: GET_ALL_USERS,
        users,
    }
};

// THUNK:
const fetchAllUsers = () => {
    return async (dispatch) => {
        try{
            const { data } = await axios.get('/api/users');
            dispatch(setAllUsers(data));
        } catch (error) {
            return error;
        }
    }
};

// REDUCER:
export default function usersReducer(state = [], action) {
    switch (action.type) {
      case GET_ALL_USERS:
        return action.users;
      default:
        return state;
    }
};