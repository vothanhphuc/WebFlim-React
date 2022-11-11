import React from 'react';
import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import '../Intro/Intro.css';
import { useState } from 'react';

const Intro = () => {
	const [mute, setMute] = useState(false);
	return (
		<div className="intro">
			<ReactPlayer
				playing={true}
				loop={true}
				width="100%"
				height="100%"
				volume={1}
				muted={mute}
				url="https://vimeo.com/509847281"
				className="intro-video"
			/>
			<div className="intro-paper">
				<h1>Netflix Movie</h1>
				<p>
					Netflix Elite Launch Capaign Director : Feranadon Weinfled Production
					Company : Awake Flim Agency
				</p>
			</div>

			{mute ? (
				<VscMute
					className="intro-mute"
					onClick={() => setMute((prev) => !prev)}
				/>
			) : (
				<VscUnmute
					className="intro-mute"
					onClick={() => setMute((prev) => !prev)}
				/>
			)}
		</div>
	);
};

export default Intro;
