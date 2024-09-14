import { styled } from "@mui/material";
import MobileMain from "./../mobile-main/index";

const MobileContainer = styled("div")`
	position: relative;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const MobileView = ({ children, MobileHeader }) => {
	return (
		<MobileContainer>
			{MobileHeader && <MobileHeader />}
			<MobileMain>{children}</MobileMain>
		</MobileContainer>
	);
};

export default MobileView;
