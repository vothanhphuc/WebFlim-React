import React from 'react';
import NextfixLogo from '../../assets/img/nextfix.png';
import { HiSearch } from 'react-icons/hi';
import '../Navbar/Navbar.css';
import useScrollY from '../../hooks/useScrollY';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
	const [ scrollY ] = useScrollY();
	const [keywords, setKeywords] = useState();
	const navigate = useNavigate();
	
	const handleInput = (event) => {
		let keyword = event.target.value;
		setKeywords(keyword);
		if(keyword.length > 0){
			navigate(`/search?keywords=${keyword.trim()}`)
		}else{
			navigate('/');
		}
	}
	const goHome = () => {
		navigate('/');
		setKeywords('');
	}
	return (
		<div
			className="navContainer"
			style={{
				width: '100%',
				height: '80px',
				position: 'fixed',
				top: '0',
				left: '0'
			}}
		>
			<div className="nav" style={ scrollY < 50 ? {backgroundColor: 'transparent'} : {backgroundColor: 'rgb(0, 0, 0)'} }>
				<div className="nav-logo" onClick={goHome}>
					<img src={NextfixLogo} alt="logo" />
				</div>
				<div className="nav-search">
					<HiSearch className='iconSearch' />
					<input type="text" placeholder="search in here" onChange={handleInput} value={keywords} />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
