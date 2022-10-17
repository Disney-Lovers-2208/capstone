import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import tvReducer from "./tvshows";
import movieReducer from "./movies";
import booksReducer from "./books";
import user from "./user";
import tv from "./tv";
import book from "./book";
import movie from "./movie";
import activityLog from "./activityLog";
import users from "./users";
import posts from "./posts";
import starRatings from "./starRatings";

const reducer = combineReducers({
  auth,
  tvs: tvReducer,
  movies: movieReducer,
  books: booksReducer,
  tv: tv,
  book: book,
  movie: movie,
  user,
  activityLog,
  users,
  posts,
  starRatings,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
