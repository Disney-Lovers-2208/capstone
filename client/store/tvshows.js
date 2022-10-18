import axios from "axios";

// action type:
const GET_TV_SHOWS = "GET_TV_SHOWS";
const CREATE_TV = "CREATE_TV";
const GET_TV_RATING = "GET_TV_RATING";

// action creators:
const setTvShows = (tvs) => ({
  type: GET_TV_SHOWS,
  tvs,
});

//Action Creator
const createTv = (tv) => {
  return {
    type: CREATE_TV,
    tv,
  };
};

// const setRating = (rating) => {
//   return {
//     type: GET_TV_RATING,
//     rating,
//   }
// }

//Thunk
export const fetchCreateTv = (tv) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(`/api/tvs`, tv);
      dispatch(createTv(created));
    } catch (error) {
      return error;
    }
  };
};

export const fetchTvShows = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/tvs");
    dispatch(setTvShows(data));
  } catch (error) {
    return error;
  }
};

// export const fetchTvRating = (id) => async (dispatch) => {
//   try {
//     const { data: rating } = await axios.get(`/api/tvs/${id}`);
//     dispatch(setRating(rating));
//   } catch (error) {
//     return error;
//   }
// }


// reducer
export default function tvsReducer(state = [], action) {
  switch (action.type) {
    case CREATE_TV:
      return [...state, action.tv];
    case GET_TV_SHOWS:
      return action.tvs;
    // case GET_TV_RATING:
    //   return action.rating;
    default:
      return state;
  }
}
