<<<<<<< HEAD
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import tvsReducer from './tvshows';
import moviesReducer from './movies';
import booksReducer from './books';
import usersReducer from './users';
=======
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import tvReducer from "./tvshows";
import movieReducer from "./movies";
import bookReducer from "./books";
>>>>>>> main
import user from "../redux/user";

const reducer = combineReducers({
  auth,
  tvs: tvsReducer,
  movies: moviesReducer,
  books: booksReducer,
  users: usersReducer,
  user,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
