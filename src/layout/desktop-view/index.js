import { Box, styled } from "@mui/material";
import DesktopMain from "../desktop-main";
import ThemeToggleButton from "@/components/theme-toggle-button/index";

const DesktopContainer = styled("div")`
	height: 100vh;
	width: 100vw;
	display: flex;
`;

const DesktopView = ({ children, DesktopHeader }) => {
	return (
		<>
			<ThemeToggleButton />
			<DesktopContainer>
				{DesktopHeader && <DesktopHeader />}
				<DesktopMain>{children}</DesktopMain>
			</DesktopContainer>
		</>
	);
};

export default DesktopView;
