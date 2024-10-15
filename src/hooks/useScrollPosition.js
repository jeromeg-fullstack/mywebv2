import { useState, useEffect } from "react";

export const useScrollPosition = () => {
	const [scrollY, setScrollY] = useState(typeof window !== "undefined" ? window.scrollY : 0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		// Add the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return scrollY;
};
