import { forwardRef } from "react";
import { styled, Typography, darken, Box } from "@mui/material";

export const TextContentSection = styled(Box)({
	height: "inherit",
	width: "inherit",
	display: "flex",
	alignItems: "baseline",
	"@media screen and (min-width: 900px)": {
		alignItems: "center"
	}
});

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

export const ImageContentSection = styled("section")({
	height: "inherit",
	width: "inherit",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});

export const ImageContentWrap = styled("div")({
	// display: "flex"
});



const StyledTypography = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "isDark"
})(({ theme, isDark }) => ({
	fontFamily: "lores-bold-narrow",
	fontSize: "18px",
	color: isDark ? "#2d2d2d" : darken("#CBCBCB", 0.1),
	letterSpacing: 2.5,
	textShadow: isDark
		? "-1px -1px 0 #CBCBCB, 1px -1px 0 #CBCBCB, -1px 1px 0 #CBCBCB, 1px 1px 0 #CBCBCB,  1px 1px 3px rgba(0,0,0,0.95)"
		: "-1px -1px 0 #2d2d2d, 1px -1px 0 #2d2d2d, -1px 1px 0 #2d2d2d, 1px 1px 0 #2d2d2d,  1px 1px 3px rgba(0,0,0,0.95)",
	"@media screen and (min-width: 600px)": {
		fontSize: "22px",
		textShadow: isDark
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


export const TextContentHeading = forwardRef(({ sx, isDark, ...props }, ref) => (
	<StyledTypography ref={ref} sx={sx} isDark={isDark} {...props} />
));

TextContentHeading.displayName = "TextContentHeading";



export const TextContentDescription = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "isDark"
})(({ theme, isDark }) => ({
	fontFamily: "Titillium Web",
	color: theme.palette.text.primary,
	fontSize: "14px",
	textShadow: "0 0 1.5px rgba(0, 0, 0, 0.5)",
	fontWeight: isDark ? 600 : 700,
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

export const ContactContentSection = styled(Box)({
	height: "inherit",
	width: "inherit",
	display: "flex",
	alignItems: "center"
});

export const ContactTextContentWrap = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start",
	padding: "0 24px",
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
