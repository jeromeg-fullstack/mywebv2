import { styled } from "@mui/material";
import DesktopMain from "../desktop-main";

const DesktopContainer = styled("div")`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
`;

const DesktopView = ({ children, DesktopHeader }) => {
	return (
		<DesktopContainer>
			{DesktopHeader && <DesktopHeader />}
			<DesktopMain>{children}</DesktopMain>
		</DesktopContainer>
	);
};

export default DesktopView;
