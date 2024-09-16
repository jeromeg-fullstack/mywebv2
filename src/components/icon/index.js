import useIsScreenSizes from "@/utils/get-is-screen-sizes";
import { Icon as MUIIcon, darken } from "@mui/material";
import { styled } from "@mui/system";

// Create a styled MUI Icon that applies the Icomoon class and any custom styles
const StyledIcon = styled(MUIIcon, {
	shouldForwardProp: (prop) => prop !== "isBigScreen"
})(({ theme, isBigScreen }) => ({
	fontFamily: "icomoon !important", // Ensure the Icomoon font-family is applied
	fontStyle: "normal",
	fontWeight: "normal",
	fontVariant: "normal",
	textTransform: "none",
	lineHeight: 0.95,
	display: "inline-block",
	textRendering: "auto",
	color: theme.palette.text.icon,
	verticalAlign: "middle",
	fontSize: !isBigScreen ? "1.8rem" : "2.25rem",
	transition: "opacity 0.3s ease, transform 0.3s ease" // Smooth transition
}));

// Custom Icon component
const Icon = ({ icon, className = "", sx = {}, ...props }) => {
	const { isTablet, isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();
	const isBigScreen = isTablet || isLaptop || isLaptopL || isDesktop;
	return (
		<StyledIcon className={`${icon} ${className}`} sx={sx} {...props} isBigScreen={isBigScreen} />
	);
};

export default Icon;
