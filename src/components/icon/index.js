import getIsScreenSizes from "@/utils/get-is-screen-sizes";
import { Icon as MUIIcon, darken } from "@mui/material";
import { styled } from "@mui/system";

// Create a styled MUI Icon that applies the Icomoon class and any custom styles
const StyledIcon = styled(MUIIcon)(({ theme, isBigScreen }) => ({
	fontFamily: "icomoon !important", // Ensure the Icomoon font-family is applied
	fontStyle: "normal",
	fontWeight: "normal",
	fontVariant: "normal",
	textTransform: "none",
	lineHeight: 0.95,
	display: "inline-block",
	textRendering: "auto",
	fontSize: !isBigScreen ? "1.8rem" : "2rem",
	padding: "0.2rem 0",
	color: darken(theme.palette.text.icon, 0.5),
	verticalAlign: "middle"
}));

// Custom Icon component
const Icon = ({ icon, className = "", sx = {}, ...props }) => {
	const { isTablet, isLaptop, isLaptopL, isDesktop } = getIsScreenSizes();
	const isBigScreen = isTablet || isLaptop || isLaptopL || isDesktop;
	return (
		<StyledIcon className={`${icon} ${className}`} sx={sx} {...props} isBigScreen={isBigScreen} />
	);
};

export default Icon;
