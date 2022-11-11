import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MoviesDetail from '../components/MovieDetail/MovieDetail';
import SearchMovies from '../components/SearchMovies/SearchMovies';

const Search = () => {
    const { MovieDetail } = useSelector(state => state.infoMovies);
    const [ isShowMovieDetail, setIsShowMovieDetail ] = useState(false);

    useEffect(() =>{
        setIsShowMovieDetail(MovieDetail ? true : false)
    },[MovieDetail])

    return (
        <div>
            <SearchMovies />
            <MoviesDetail  movie={MovieDetail} openModal={isShowMovieDetail} />
        </div>
    );
};

export default Search;