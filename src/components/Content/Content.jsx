import { useRef, React } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import '../Content/Content.css';
import { SmoothHorizontalScrolling } from '../../utils';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/actions';

const Content = ({ Movies, title, maxWidth, isNetflix }) => {
	const sliderRef = useRef();
	const movieRef = useRef();
	const [dragDown, setDragDown] = useState(0);
	const [dragMove, setDragMove] = useState(0);
	const [isDrag, setIsDrag] = useState(false);
	const dispatch = useDispatch()

	const handleSetMovie = (movie) => {
		dispatch(setMovieDetail(movie))
	}

	const handleScrollRight = () => {
		const maxScrollLeft =
			sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
		console.log(maxScrollLeft);
		console.log(sliderRef.current.scrollLeft);
		if (sliderRef.current.scrollLeft < maxScrollLeft) {
			SmoothHorizontalScrolling(
				sliderRef.current,
				250,
				movieRef.current.clientWidth * 2,
				sliderRef.current.scrollLeft
			);
		}
	};
	const handleScrollLeft = () => {
		if (sliderRef.current.scrollLeft > 0) {
			SmoothHorizontalScrolling(
				sliderRef.current,
				250,
				-movieRef.current.clientWidth * 2,
				sliderRef.current.scrollLeft
			);
		}
	};
	useEffect(() => {
		if (isDrag) {
			if (dragMove < dragDown) {
				handleScrollRight();
			}
			if (dragMove > dragDown) {
				handleScrollLeft();
			}
		}
	}, [dragDown, dragMove, isDrag]);
	const onDragStart = (e) => {
		setIsDrag(true);
		setDragDown(e.screenX);
	};
	const onDragEnd = (e) => {
		setIsDrag(false);
	};
	const onDragEnter = (e) => {
		setDragMove(e.screenX);
	};
	return (
		<div className="movie-container" draggable="false">
			<h1>{title}</h1>
			<div
				className="movie-slider"
				ref={sliderRef}
				draggable="true"
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
				onDragEnter={onDragEnter}
			>
				{Movies &&
					Movies.length > 0 &&
					Movies.map((movie, index) => {
						if (movie.poster_path && movie.backdrop_path !== null) {
							let imageUrl = isNetflix
								? `https://image.tmdb.org/t/p/original${movie.poster_path}`
								: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
							return (
								<div
									key={index}
									className="movie-item"
									ref={movieRef}
									draggable="false"
									onClick={() => handleSetMovie(movie)}
								>
									<img src={imageUrl} alt="" draggable="false" />
									<div className="movie-name">{movie.title || movie.name}</div>
								</div>
							);
						} else{
							return (
								null
							)
						}
					})}
			</div>
			<div className="movie-btnLeft" onClick={handleScrollLeft}>
				<AiOutlineLeft />
			</div>
			<div className="movie-btnRight" onClick={handleScrollRight}>
				<AiOutlineRight />
			</div>
		</div>
	);
};
Content.propTypes = {
	Movies: PropTypes.any,
	title: PropTypes.string,
	maxWidth: PropTypes.string,
	isNetflix: PropTypes.bool
};

export default Content;
