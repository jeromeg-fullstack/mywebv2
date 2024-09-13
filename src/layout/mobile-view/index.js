import { styled } from "@mui/material";

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
			{children}
		</MobileContainer>
	);
};

export default MobileView;
