import MobileNavbar from "@/components/mobile-navbar";
import { styled } from "@mui/material";
import getIsScreenSizes from "@/utils/get-is-screen-sizes";

const HeaderContainer = styled("header")(({ theme, isMobileL }) => ({
	height: !isMobileL ? "65px" : "75px",
	width: "100%"
}));

const MobileHeader = () => {
	const { isMobileL, isTablet } = getIsScreenSizes();
	const isMobileBig = isMobileL || isTablet;
	return (
		<HeaderContainer isMobileL={isMobileBig}>
			<MobileNavbar />
		</HeaderContainer>
	);
};

export default MobileHeader;
