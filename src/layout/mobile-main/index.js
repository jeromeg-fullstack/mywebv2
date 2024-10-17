import { styled } from "@mui/material";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
import { useThemeCtx } from "@/context/theme";

const MainContainer = styled("main", {
	shouldForwardProp: (prop) => prop !== "isTablet" && prop !== "isBlogPage"
})(({ theme, isTablet, isBlogPage }) => ({
	height: "100%",
	// height: "auto",
	width: "100%",
	display: "flex",
	flexDirection: isBlogPage ? "column" : !isTablet ? "column-reverse" : "row"
}));

const MobileMain = ({ children }) => {
	const { isBlogPage } = useThemeCtx();
	const { isTablet } = useIsScreenSizes();
	return (
		<MainContainer isTablet={isTablet} isBlogPage={isBlogPage}>
			{children}
		</MainContainer>
	);
};

export default MobileMain;
