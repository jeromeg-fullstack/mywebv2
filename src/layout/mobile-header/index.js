import MobileNavbar from "@/components/mobile-navbar";
import { styled } from "@mui/material";

const HeaderContainer = styled("header")({
	height: "auto",
	width: "inherit",
	zIndex: 10
	// background-color: $color-button-hover-bg;
});

const MobileHeader = () => {
	return (
		<HeaderContainer>
			<MobileNavbar />
		</HeaderContainer>
	);
};

export default MobileHeader;
