import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import tvsReducer from './tvshows';
import moviesReducer from './movies';
import booksReducer from './books';
import user from "../redux/user";
import book from "../redux/book";
import movie from "../redux/movie";
import tv from "../redux/tv";

const reducer = combineReducers({ 
  auth,
  tvs: tvsReducer,
  movies: moviesReducer,
  books: booksReducer,
  user,
  book,
  movie, 
  tv,
});


const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
