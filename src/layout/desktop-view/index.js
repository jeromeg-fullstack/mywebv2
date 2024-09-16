import { styled } from "@mui/material";
import DesktopMain from "../desktop-main";

const DesktopContainer = styled("div")`
	height: 100vh;
	width: 100vw;
	display: flex;
`;

const DesktopView = ({ children, DesktopHeader }) => {
	return (
		<>
			<DesktopContainer>
				{DesktopHeader && <DesktopHeader />}
				<DesktopMain>{children}</DesktopMain>
			</DesktopContainer>
		</>
	);
};

export default DesktopView;
