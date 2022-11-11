import { useEffect, useState } from 'react';

const useScrollY = () => {
    const [ scrollY, setScrollY ] = useState(0);

	const handleScrollY = () => {
		const srcoll = window.scrollY || document.documentElement.scrollTop;
		console.log(srcoll);
		setScrollY(srcoll)
	}

	useEffect(() => {
		handleScrollY();
		window.addEventListener('scroll', handleScrollY);
		return(
			() => {window.removeEventListener('scroll', handleScrollY);}
		)
	},[])
    return (
        [scrollY]
    );
};

export default useScrollY;