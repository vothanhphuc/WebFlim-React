import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSearchMovie, setMovieDetail } from '../store/actions/movieActions';
import '../SearchMovies/SearchMovies.css';

// const MoviesList = []
const useQuery = () => new URLSearchParams(useLocation().search);

const SearchMovies = () => {
	const dispatch = useDispatch();
	const { MovieSearch } = useSelector((state) => state.infoMovies);
	const keywords = useQuery().get('keywords');
	console.log(keywords);

	useEffect(() => {
		if (keywords) dispatch(getSearchMovie(keywords));
	}, [keywords, dispatch]);
	console.log(MovieSearch);

	return (
		<div className="searchPane">
			{MovieSearch && MovieSearch.length > 0 ? (
				<div className="searchContent">
					{MovieSearch.map((movie, index) => {
						if (movie.backdrop_path !== null && movie.media_type !== 'person') {
							const imageURL = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
							return (
								<div
									className="searchItem"
									key={index}
									onClick={() => dispatch(setMovieDetail(movie))}
								>
									<img src={imageURL} alt="" />
									<span>{movie.title || movie.name}</span>
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			) : (
				<div>
					<h2>Your Search for "keywords" did not have any</h2>
				</div>
			)}
		</div>
	);
};

export default SearchMovies;
