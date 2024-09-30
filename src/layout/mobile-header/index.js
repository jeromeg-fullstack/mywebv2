import { useState, useEffect } from "react";
import { useThemeCtx } from "@/context/theme";
import MobileNavbar from "@/components/mobile-navbar";
import { styled } from "@mui/material";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
import { useScrollPosition } from "@/hooks/useScrollPosition"; // Import the custom hook

const HeaderContainer = styled("header", {
	shouldForwardProp: (prop) =>
		prop !== "isMobileL" &&
		prop !== "translateY" &&
		prop !== "isFullHeight" &&
		prop !== "isBlogPage"
})(({ theme, isMobileL, translateY, isFullHeight, isBlogPage }) => ({
	height: isMobileL ? "75px" : "65px",
	width: "100%",
	position: !isBlogPage ? "relative" : "fixed",
	top: 0,
	zIndex: 1000,
	backgroundColor: theme.palette.background.paper,
	boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
	transform: `translateY(${translateY}px)`,
	transition: "transform 0.4s ease, height 0.4s ease",
	animation: "animate__animated animate__slideInDown"
}));

const MobileHeader = () => {
	const { isMobileL, isTablet } = useIsScreenSizes();
	const scrollY = useScrollPosition(); // Get scrollY from the custom hook
	const [translateY, setTranslateY] = useState(0); // Initially, the header is visible (translateY = 0)
	const [isFullHeight, setIsFullHeight] = useState(false);
	const { isBlogPage } = useThemeCtx();

	const isMobileOrTablet = isMobileL || isTablet;

	useEffect(() => {
		if (scrollY <= 75) {
			// Header is fully visible when scrollY is <= 75
			setTranslateY(0);
			setIsFullHeight(false);
		} else if (scrollY > 75 && scrollY <= 700) {
			// Header slides up after scrolling past 75px
			setTranslateY(-100);
			setIsFullHeight(false);
		} else if (scrollY > 700) {
			// Header slides back down when scrollY > 300px
			setTranslateY(0);
			setIsFullHeight(true); // Optionally, adjust height if needed
		}
	}, [scrollY]);

	return (
		<HeaderContainer
			isMobileL={isMobileOrTablet}
			translateY={translateY} // Pass the dynamic translateY value
			isFullHeight={isFullHeight} // Pass dynamic height logic
			isBlogPage={isBlogPage}>
			<MobileNavbar />
		</HeaderContainer>
	);
};

export default MobileHeader;
