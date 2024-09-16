import { styled } from "@mui/material";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";

const MainContainer = styled("main")(({ theme, isTablet }) => ({
	height: "100vh",
	display: "flex",
	flexDirection: !isTablet ? "column-reverse" : "row"
}));

const MobileMain = ({ children }) => {
	const { isTablet } = useIsScreenSizes();
	return <MainContainer isTablet={isTablet}>{children}</MainContainer>;
};

export default MobileMain;
