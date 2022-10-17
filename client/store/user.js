import axios from "axios";

// ACTION TYPE
const SET_USER = "SET_USER";
const UPDATE_USER = "UPDATE_USER";
// const ADD_FAVORITE_TV = "ADD_FAVORITE_TV";
// const REMOVE_FAVORITE_TV = "REMOVE_FAVORITE_TV";

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

// const setFavoriteTv = (favorite) => ({
//   type: ADD_FAVORITE_TV,
//   favorite,
// });

// const _removeFavoriteTv = (favorite) => ({
//   type: REMOVE_FAVORITE_TV,
//   favorite,
// })

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

// export const addFavoriteTv = (userId) => {
//   return async (dispatch) => {
//     try {
//       const { data: favorite } = await axios.put(`/api/users/${userId}`);
//       dispatch(setFavoriteTv(favorite));
//     } catch (error) {
//       return error;
//     }
//   };
// };

// export const removeFavoriteTv = (userId) => {
//   return async(dispatch) => {
//     try {
//       const { data: favorite } = await axios.put(`/api/users/${userId}`);
//       dispatch(_removeFavoriteTv(favorite));
//     } catch(error) {
//       return error;
//     }
//   }
// }

// REDUCER
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    // case ADD_FAVORITE_TV:
    //   return {...state, favorite: true};
    // case REMOVE_FAVORITE_TV:
    //   return {...state, favorite: false};
    default:
      return state;
  }
}
