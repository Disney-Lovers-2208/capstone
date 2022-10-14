import axios from "axios";

const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export const updateAuth = (authId, authForm, navigate) => async (dispatch) => {
  try {
    const { data: auth } = await axios.put(`/api/users/${authId}`, authForm);
    dispatch(setAuth(auth));
    navigate("/profile");
  } catch (error) {
    console.log(error);
  }
};

export const authenticate =
  (username, password, method, email, firstName, lastName, navigate) =>
  async (dispatch) => {
    try {
      let res;
      if (method === "login") {
        res = await axios.post("/auth/login", { username, password });
      } else {
        res = await axios.post("/auth/signup", {
          username,
          password,
          email,
          firstName,
          lastName,
        });
      }
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
      navigate("/home");
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = (navigate) => {
  window.localStorage.removeItem(TOKEN);
  navigate("/login");
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
