import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './reducers/movieReducer';

const rootReducer = combineReducers({
    infoMovies : movieReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;