import { styled } from "@mui/material";

const DesktopMainContainer = styled("main")(({ theme }) => ({
	// flexGrow: 1,
	display: "flex",
	width: "100%",
	height: "100%"
}));

const DesktopMain = ({ children }) => {
	return <DesktopMainContainer>{children}</DesktopMainContainer>;
};

export default DesktopMain;
