import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useThemeCtx } from "@/context/theme";
import MobileNavbar from "@/components/mobile-navbar";
import { styled } from "@mui/material";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";

const HeaderContainer = styled("header", {
	shouldForwardProp: (prop) => prop !== "isMobileL" && prop !== "isFixed"
})(({ theme, isMobileL, isFixed }) => ({
	height: !isMobileL ? "65px" : "75px",
	width: "100%",
	position: isFixed ? "fixed" : "relative", // Apply fixed when isFixed is true
	top: isFixed ? 0 : 20,
	zIndex: 1000,
	backgroundColor: theme.palette.background.paper,
	boxShadow: isFixed ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none", // Shadow when fixed
	opacity: 1, // Ensure opacity is always visible for the transition
	transform: isFixed ? "translateY(0)" : "translateY(-20px)", // Start at -20px, then move to 0 when fixed
	transition: "transform 0.4s ease, box-shadow 0.4s ease" // Smooth transition for transform and shadow
}));

const MobileHeader = () => {
	const { isMobileL, isTablet } = useIsScreenSizes();
	const [isScrolled, setIsScrolled] = useState(false);
	const { isBlogPage } = useThemeCtx();

	const isMobileBig = isMobileL || isTablet;

	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300 && isBlogPage) {
				setIsScrolled(true);
				setTimeout(() => "", 100); // Delay for smooth appearance
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			setIsScrolled(false);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isBlogPage]);

	return (
		<HeaderContainer isMobileL={isMobileBig} isFixed={isScrolled}>
			<MobileNavbar />
		</HeaderContainer>
	);
};

export default MobileHeader;
