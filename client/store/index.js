import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import tvReducer from './tvshows';
import movieReducer from './movies';
import bookReducer from './books';

const reducer = combineReducers({ 
  auth,
  tvs: tvReducer,
  movies: movieReducer,
  books: bookReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
