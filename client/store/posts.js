import axios from "axios";

// action type:
const CREATE_POST = "CREATE_POST";

// action creators:
export const _createPost = (post) => {
  return {
    type: CREATE_POST,
    post,
  };
};

//thunks:
export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(`/api/posts`, post);
      dispatch(_createPost(created));
    } catch (error) {
      return error;
    }
  };
};

//reducer:
export default function posts(state = [], action) {
  // console.log("action", action);
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.post];
    default:
      return state;
  }
}
