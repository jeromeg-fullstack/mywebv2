import MobileNavbar from "@/components/mobile-navbar";
import { styled } from "@mui/material";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";

const HeaderContainer = styled("header", {
	shouldForwardProp: (prop) => prop !== "isMobileL"
})(({ theme, isMobileL }) => ({
	height: !isMobileL ? "65px" : "75px",
	width: "100%"
}));

const MobileHeader = () => {
	const { isMobileL, isTablet } = useIsScreenSizes();
	const isMobileBig = isMobileL || isTablet;
	return (
		<HeaderContainer isMobileL={isMobileBig}>
			<MobileNavbar />
		</HeaderContainer>
	);
};

export default MobileHeader;
