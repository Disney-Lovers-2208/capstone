import axios from "axios";

// action type:
const GET_TV_SHOWS = "GET_TV_SHOWS";

// action creators:
const setTvShows = (tvs) => ({
    type: GET_TV_SHOWS = "GET_TV_SHOWS",
    tvs,
});

// thunks:
export const fetchTvShows = () => async (dispatch) => {
    const { data } = await axios.get('/api/tvs');
    dispatch(setTvShows(data));
};

// reducer
export default function tvReducer(tvs = [], action) {
    switch (action.type) {
        case GET_TV_SHOWS:
            return action.tvs;
        default:
            return tvs;
    }
}