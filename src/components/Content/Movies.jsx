import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ACTIONS from '../store/actions/movieActions';
import Content from './Content';
import '../Content/Content.css';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import useScrollY from '../../hooks/useScrollY';

// const movies = [
// 	'https://2phimmoi.net/wp-content/uploads/2022/09/nope-103889-thumbnail.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2021/12/nguoi-nhen-khong-con-nha-58642-thumbnail-250x350.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2022/09/nope-103889-thumbnail.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2021/12/nguoi-nhen-khong-con-nha-58642-thumbnail-250x350.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2022/09/nope-103889-thumbnail.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2021/12/nguoi-nhen-khong-con-nha-58642-thumbnail-250x350.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2022/09/nope-103889-thumbnail.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2021/12/nguoi-nhen-khong-con-nha-58642-thumbnail-250x350.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2022/09/nope-103889-thumbnail.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2021/12/nguoi-nhen-khong-con-nha-58642-thumbnail-250x350.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2022/09/nope-103889-thumbnail.jpg',
// 	'https://2phimmoi.net/wp-content/uploads/2021/12/nguoi-nhen-khong-con-nha-58642-thumbnail-250x350.jpg'
// ];

const handleScrollTop = () => {
	scroll.scrollToTop();
};

const Movies = (props) => {
	const dispatch = useDispatch();
	const {
		NetflixOriginals,
		TrendingMovies,
		TopRateMovies,
		ActionMovies
	} = useSelector((state) => state.infoMovies);
	const scrollY = useScrollY();

	useEffect(() => {
		dispatch(ACTIONS.getNetflixOriginals());
		dispatch(ACTIONS.getTrendingMovies());
		dispatch(ACTIONS.getTopRateMovies());
		dispatch(ACTIONS.getActionMovies());
	}, [dispatch]);
	console.log(NetflixOriginals);


	return (
		<div>
			<Content
				Movies={NetflixOriginals}
				title="Netflix Original"
				isNetflix={true}
			/>
			<Content
				Movies={TrendingMovies}
				title="Trending Movies"
				maxWidth="250px"
			/>
			<Content
				Movies={TopRateMovies}
				title="Top Rate Movies"
				maxWidth="250px"
			/>
			<Content Movies={ActionMovies} title="Action Movies" maxWidth="250px" />
			<div
				className="OnTopMovie"
				onClick={() => handleScrollTop()}
				style={{ visibility: `${scrollY > 600 ? 'visible' : 'hidden'}` }}
			>
				<FaArrowAltCircleUp />
			</div>
		</div>
	);
};

export default Movies;
