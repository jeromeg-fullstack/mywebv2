import { styled, Typography, lighten, darken } from "@mui/material";

export const TextContentSection = styled("section")({
	height: "inherit",
	width: "inherit",
	display: "flex",
	alignItems: "baseline",
	"@media screen and (min-width: 900px)": {
		alignItems: "center"
	}
});

export const TextContentWrap = styled("div")(({ theme }) => ({
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
	// display: "flex",
	// justifyContent: "center",
	// alignItems: "center",
	// height: "100%",
	// width: "100%"
});

export const TextContentHeading = styled(Typography, {
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

export const TextContentDescription = styled(Typography)(({ theme }) => ({
	fontFamily: "Titillium Web",
	color: theme.palette.text.primary,
	fontSize: "14px",
	fontWeight: 600,
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
