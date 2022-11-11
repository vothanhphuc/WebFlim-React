import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Movies from '../components/Content/Movies';
import Intro from '../components/Intro/Intro';
import MoviesDetail from '../components/MovieDetail/MovieDetail';

const Home = () => {
    const { MovieDetail } = useSelector(state => state.infoMovies);
    const [ isShowMovieDetail, setIsShowMovieDetail ] = useState(false);

    useEffect(() => {
        setIsShowMovieDetail(MovieDetail ? true : false)
    },[MovieDetail])
    return (
        <div>
            <Intro />
			<Movies />
			<MoviesDetail movie={MovieDetail} openModal={isShowMovieDetail} />
        </div>
    );
};

export default Home;