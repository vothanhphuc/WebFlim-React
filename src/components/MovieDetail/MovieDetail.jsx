import React from 'react';
import PropTypes from 'prop-types';
import '../MovieDetail/MovieDetail.css';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/actions';

const MoviesDetail = ({movie, openModal}) => {
    const dispatch = useDispatch()
    // const [openModal, SetOpenModal] = useState(false);
    const handleClose = () => {
        dispatch(setMovieDetail(null))
    }
    // const img = new URL(`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`) 

    return (
        
        <div className='movie-detail'>
            <div className={`movie-backdrop ${openModal ? 'showBackdrop' : 'hideBackdrop'}`} onClick={() => handleClose()} ></div>
            <div className={`movie-modal ${openModal ? 'showModal' : 'hideModal'}`}>
                <div className='container' style={movie ? {backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})`, backgroundSize: 'cover'} : {}}>
                    <div className='container-info'>
                        <h1 className='title'>{movie && (movie.name || movie.title)}</h1>
                        <p className='statistical'>
                            <span className='statistical-rating'>Rating: {movie && (movie.vote_average*10)} %</span>
                            <span className='statistical-popularity'>Popularity: {movie && movie.popularity}</span>
                        </p>
                        <p className='releaseDate'>Release Date: {movie && movie.first_air_date}</p>
                        <p className='runTime'>Run Time: {movie && (movie.runtime || movie.episode_run_time)}</p>
                        <p className='overview'>{movie && movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

MoviesDetail.propTypes = {
    movie: PropTypes.any,
    openModal: PropTypes.bool

};

export default MoviesDetail;