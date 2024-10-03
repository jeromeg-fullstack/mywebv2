import { forwardRef } from "react";
import { styled, Typography, lighten, Box } from "@mui/material";

export const TextContentSection = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	height: isSmallView ? "50%" : "100%",
	width: isSmallView ? "100%" : "50%",
	display: "flex",
	alignItems: "baseline",
	"@media screen and (min-width: 900px)": {
		alignItems: "center"
	}
}));

export const TextContentWrap = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start",
	padding: "0 24px",
	"@media screen and (min-width: 600px)": {
		padding: " 0 32px"
	},
	"@media screen and (min-width: 765px)": {
		padding: "0 48px"
	},
	"@media screen and (min-width: 900px)": {
		padding: "0 54px"
	},
	"@media screen and (min-width: 1024px)": {
		padding: "0 64px"
	}
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
	fontFamily: "lores-bold-narrow",
	fontSize: "18px",
	color: theme.palette.mode === "dark" ? "#333" : lighten("#CBCBCB", 0.25),
	letterSpacing: 2.5,
	textShadow:
		theme.palette.mode === "dark"
			? "-1px -1px 0 #CBCBCB, 1px -1px 0 #CBCBCB, -1px 1px 0 #CBCBCB, 1px 1px 0 #CBCBCB,  1px 1px 3px rgba(0,0,0,0.95)"
			: "-1px -1px 0 #2d2d2d, 1px -1px 0 #2d2d2d, -1px 1px 0 #2d2d2d, 1px 1px 0 #2d2d2d,  1px 1px 3px rgba(0,0,0,0.95)",
	"@media screen and (min-width: 600px)": {
		fontSize: "22px",
		textShadow:
			theme.palette.mode === "dark"
				? "-2px -2px 0 #CBCBCB, 2px -2px 0 #CBCBCB, -2px 2px 0 #CBCBCB, 2px 2px 0 #CBCBCB,  2px 2px 5px rgba(0,0,0,0.95)"
				: "-2px -2px 0 #2d2d2d, 2px -2px 0 #2d2d2d, -2px 2px 0 #2d2d2d, 2px 2px 0 #2d2d2d,  2px 2px 5px rgba(0,0,0,0.95)",
		letterSpacing: 1
	},
	"@media screen and (min-width: 765px)": {
		fontSize: "27px",
		letterSpacing: -1
	},
	"@media screen and (min-width: 900px)": {
		fontSize: "45px"
	}
}));

export const TextContentHeading = forwardRef(({ sx, ...props }, ref) => (
	<StyledTypography ref={ref} sx={sx} {...props} />
));

TextContentHeading.displayName = "TextContentHeading";

export const TextContentDescription = styled(Typography)(({ theme }) => ({
	fontFamily: "Titillium Web",
	color: theme.palette.text.primary,
	fontSize: "14px",
	textShadow: "0 0 1.5px rgba(0, 0, 0, 0.5)",
	fontWeight: theme.palette.mode === "dark" ? 600 : 700,
	"@media screen and (min-width: 600px)": {
		fontSize: " 18px"
	},
	"@media screen and (min-width: 765px)": {
		fontSize: "20px"
	},
	"@media screen and (min-width: 900px)": {
		fontSize: "20px",
		letterSpacing: 1
	}
}));

/* %%%%%%%%%% CONTACT-PAGE-STYLES %%%%%%%%%%%%%%% */
export const ContactContentSection = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	height: "100%",
	width: isSmallView ? "100%" : "50%",
	overflowY: "hidden"
}));

export const ContactTextContentWrap = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: isSmallView ? "center" : "flex-start",
	padding: "0 24px",
	height: "100%",
	width: "100%",
	"@media screen and (min-width: 600px)": {
		padding: " 0 32px"
	},
	"@media screen and (min-width: 765px)": {
		padding: "0 100px"
	},
	"@media screen and (min-width: 900px)": {
		padding: "0 140px"
	},
	"@media screen and (min-width: 1024px)": {
		padding: "64px"
	}
}));

export const ImageContentSection = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	height: isSmallView ? "50%" : "100%",
	width: isSmallView ? "100%" : "50%",
	position: "relative",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}));
