import axios from "axios";
import * as Types from '../types';

const API_KEY = '16b9db81aa3142d9331d9616bc38bf32';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNetflixOriginals = () => async dispatch =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results})
    } catch (error) {
        console.log('Get Netflix API Error', error); 
    }
}

export const getTrendingMovies = () => async dispatch =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type: Types.GET_TRENDING_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get Trending API Error', error); 
    }
}

export const getTopRateMovies = () => async dispatch =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        dispatch({type: Types.GET_TOPRATE_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get TopRate API Error', error); 
    }
}

export const getActionMovies = () => async dispatch =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispatch({type: Types.GET_ACTION_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get Actions API Error', error); 
    }
}

export const setMovieDetail = (movie) => async dispatch =>{
    dispatch({type: Types.SET_MOVIE_DETAIL, payload: movie})
}

export const getSearchMovie = (keywords) => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
        )
        dispatch({type: Types.GET_SEARCH_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get Search API Error', error);
    }
}

