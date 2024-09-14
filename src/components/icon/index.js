import { Icon as MUIIcon, darken } from "@mui/material";
import { styled } from "@mui/system";

// Create a styled MUI Icon that applies the Icomoon class and any custom styles
const StyledIcon = styled(MUIIcon)(({ theme }) => ({
	fontFamily: "icomoon !important", // Ensure the Icomoon font-family is applied
	fontStyle: "normal",
	fontWeight: "normal",
	fontVariant: "normal",
	textTransform: "none",
	lineHeight: 0.95,
	display: "inline-block",
	textRendering: "auto",
	fontSize: "2.25rem",
	padding: "0.2rem 0",
	color: darken(theme.palette.text.icon, 0.5)
}));

// Custom Icon component
const Icon = ({ icon, className = "", sx = {}, ...props }) => {
	return <StyledIcon className={`${icon} ${className}`} sx={sx} {...props} />;
};

export default Icon;
