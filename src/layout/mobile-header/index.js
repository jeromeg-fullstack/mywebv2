import { useState, useEffect } from "react";
import { useThemeCtx } from "@/context/theme";
import MobileNavbar from "@/components/mobile-navbar";
import { styled } from "@mui/material";
import { useIsScreenSizes } from "@/hooks/get-is-screen-sizes";
import { useScrollPosition } from "@/hooks/useScrollPosition"; // Import the custom hook

const HeaderContainer = styled("header", {
	shouldForwardProp: (prop) => prop !== "isMobileL" && prop !== "isFixed"
})(({ theme, isMobileL, isFixed }) => ({
	height: isMobileL ? "75px" : "65px",
	width: "100%",
	position: isFixed ? "fixed" : "relative",
	top: isFixed ? 0 : 20,
	zIndex: 1000,
	backgroundColor: theme.palette.background.paper,
	boxShadow: isFixed ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
	transform: isFixed ? "translateY(0)" : "translateY(-20px)",
	transition: "transform 0.4s ease, box-shadow 0.4s ease, top 0.4s ease"
}));

const MobileHeader = () => {
	const { isMobileL, isTablet } = useIsScreenSizes();
	const scrollY = useScrollPosition(); // Get scrollY from the custom hook
	const [isScrolled, setIsScrolled] = useState(false);
	const { isBlogPage } = useThemeCtx();

	const isMobileOrTablet = isMobileL || isTablet;

	useEffect(() => {
		if (scrollY > 300 && isBlogPage) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	}, [scrollY, isBlogPage]); // Trigger update when scrollY or isBlogPage changes

	return (
		<HeaderContainer isMobileL={isMobileOrTablet} isFixed={isScrolled}>
			<MobileNavbar />
		</HeaderContainer>
	);
};

export default MobileHeader;
