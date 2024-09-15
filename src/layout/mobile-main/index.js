import { GlobalStyles, styled } from "@mui/material";
import getIsScreenSizes from "@/utils/get-is-screen-sizes";

const MainContainer = styled("main")(({ theme, isTablet }) => ({
	height: "100vh",
	display: "flex",
	flexDirection: !isTablet ? "column-reverse" : "row"
}));

const MobileMain = ({ children }) => {
	const { isTablet } = getIsScreenSizes();
	return (
		<MainContainer isTablet={isTablet}>
			<GlobalStyles />
			{children}
		</MainContainer>
	);
};

export default MobileMain;
