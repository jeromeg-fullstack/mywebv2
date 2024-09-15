import { styled } from "@mui/material";
import DesktopMain from "../desktop-main";
import DesktopHeader from "../desktop-header";

const DesktopContainer = styled("div")`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
`;

const DesktopView = ({ children, MobileHeader }) => {
	return (
		<DesktopContainer>
			{DesktopHeader && <DesktopHeader />}
			<DesktopMain>{children}</DesktopMain>
		</DesktopContainer>
	);
};

export default DesktopView;
