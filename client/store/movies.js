import axios from "axios";

// action type:
const GET_MOVIES = "GET_MOVIES";

// action creators:
const setMovies = (movies) => ({
    type: GET_MOVIES,
    movies,
});

// thunks:
export const fetchMovies = () => async (dispatch) => {
    const { data } = await axios.get('/api/movies');
    dispatch(setMovies(data));
};

// reducer
export default function moviesReducer(state = [], action) {
    switch (action.type) {
        case GET_MOVIES:
            return action.movies;
        default:
            return state;
    }
}