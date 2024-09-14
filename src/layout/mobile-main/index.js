import { GlobalStyles, styled } from "@mui/material";

const MainContainer = styled("main")({
	height: "100vh",
	display: "flex",
	flexDirection: "column-reverse"
});

const MobileMain = ({ children }) => {
	return (
		<MainContainer>
			<GlobalStyles />
			{children}
		</MainContainer>
	);
};

export default MobileMain;
