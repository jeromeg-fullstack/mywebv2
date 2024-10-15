import MobileMain from "./../mobile-main/index";

const MobileView = ({ children, MobileHeader }) => {
	return (
		<>
			{MobileHeader && <MobileHeader />}
			<MobileMain>{children}</MobileMain>
		</>
	);
};

export default MobileView;
