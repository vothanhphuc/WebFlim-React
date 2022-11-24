import React, { useState } from 'react';
import '../Header/Header.css';
import { HiShare } from 'react-icons/hi';
import { BsFacebook, BsWhatsapp, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaTiktok, FaLinkedin } from 'react-icons/fa';

const Header = () => {
	const [openMenu, SetOpenMenu] = useState(false);

	const handleOpenMenu = () => {
		SetOpenMenu(!openMenu);
	};
	return (
		<div>
			<div className={`menu ${openMenu ? 'rotate-center' : ''}`}>
				<div className="toggle">
					<HiShare className="share" onClick={handleOpenMenu} />
				</div>
				<li>
					<a href="#" style={{ color: '#1877f2' }}>
						<BsFacebook />
					</a>
				</li>
				<li>
					<a href="#" style={{ color: '#25d366' }}>
						<BsWhatsapp />
					</a>
				</li>
				<li>
					<a href="#" style={{ color: '#1da1f2' }}>
						<BsTwitter />
					</a>
				</li>
				<li>
					<a href="#" style={{ color: '#ea4c89' }}>
						<BsYoutube />
					</a>
				</li>
				<li>
					<a href="#" style={{ color: '#0a66c2' }}>
						<FaTiktok />
					</a>
				</li>
				<li>
					<a href="#" style={{ color: '#c32aa3' }}>
						<FaLinkedin />
					</a>
				</li>
			</div>
		</div>
	);
};

export default Header;
