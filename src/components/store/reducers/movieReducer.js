import * as Type from '../types';

const initialState = {
	NetflixOriginals : null,
	TrendingMovies : null,
	TopRateMovies : null,
	ActionMovies : null,
	MovieDetail: null,
	MovieSearch: null
};
const movieReducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case Type.GET_NETFLIX_ORIGINALS: {
			return {...state, NetflixOriginals: payload};
		}
		case Type.GET_TRENDING_MOVIES: {
			return {...state, TrendingMovies: payload};
		}
		case Type.GET_TOPRATE_MOVIES: {
			return {...state, TopRateMovies: payload};
		}
		case Type.GET_ACTION_MOVIES: {
			return {...state, ActionMovies: payload};
		}
		case Type.SET_MOVIE_DETAIL: {
			return {...state, MovieDetail: payload};
		}
		case Type.GET_SEARCH_MOVIES: {
			return {...state, MovieSearch: payload};
		}

	
		default:
			return state;
	}
}

export default movieReducer;