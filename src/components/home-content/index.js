import { Box, Typography } from "@mui/material";
import { darken, lighten, styled } from "@mui/material";

// Styled Components
export const ContentContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	marginLeft: !isSmallView ? "4rem" : 0,
	height: isSmallView ? "50%" : "auto",
	width: isSmallView ? "100%" : "50%",
	marginTop: isSmallView ? "2rem" : 0
}));

export const InnerContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: !isSmallView ? "center" : "flex-start",
	alignItems: !isSmallView ? "flex-start" : "center",
	height: "100%",
	width: "100%"
}));

export const GreetingText = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	fontFamily: "Titillium Web",
	fontSize: "20px",
	fontWeight: "bolder",
	color: theme.palette.text.primary,
	letterSpacing: "0.6px",
	textShadow: "0px 0px 1px rgba(0,0,0,.5)",
	padding: 0,
	margin: 0,
	[theme.breakpoints.between("sm", "md")]: {
		fontSize: "26px"
	},
	[theme.breakpoints.between("md", "lg")]: {
		fontSize: "35px"
	},
	[theme.breakpoints.between("lg", "xl")]: {
		fontSize: "40px"
	},
	[theme.breakpoints.up("xl")]: {
		fontSize: "45px"
	}
}));

export const NameText = styled(Typography)(({ theme }) => ({
	visibility: "hidden",
	fontFamily: "lores-bold-narrow",
	fontSize: "50px",
	letterSpacing: -2,
	color: theme.palette.mode === "dark" ? "#333" : lighten("#CBCBCB", 0.25),
	textShadow:
		theme.palette.mode === "dark"
			? "-2px -2px 0 #CBCBCB, 2px -2px 0 #CBCBCB, -2px 2px 0 #CBCBCB, 2px 2px 0 #CBCBCB,  2px 2px 5px rgba(0,0,0,0.95)"
			: "-3px -3px 0 #2d2d2d, 3px -3px 0 #2d2d2d, -3px 3px 0 #2d2d2d, 3px 3px 0 #2d2d2d,  3px 3px 5px rgba(0,0,0,1)",
	padding: 0,
	margin: 0,
	[theme.breakpoints.between("sm", "md")]: {
		fontSize: "75px",
		letterSpacing: -6
	},
	[theme.breakpoints.between("md", "lg")]: {
		fontSize: "90px",
		letterSpacing: -5
	},
	[theme.breakpoints.between("lg", "xl")]: {
		fontSize: "100px",
		letterSpacing: -8
	},
	[theme.breakpoints.up("xl")]: {
		fontSize: "100px",
		letterSpacing: -8
	},

	"& span.blast": {
		color: "inherit",
		textShadow:
			theme.palette.mode === "dark"
				? "-2px -2px 0 #CBCBCB, 2px -2px 0 #CBCBCB, -2px 2px 0 #CBCBCB, 2px 2px 0 #CBCBCB,  2px 2px 5px rgba(0,0,0,0.95)"
				: "-2px -2px 0 #2d2d2d, 2px -2px 0 #2d2d2d, -2px 2px 0 #2d2d2d, 2px 2px 0 #2d2d2d,  2px 2px 5px rgba(0,0,0,0.95)",
		opacity: 0,
		display: "inline-block",
		transition: "all .3s ease-out",
		"&:hover": {
			color: theme.palette.mode === "dark" ? "#333" : darken("#CBCBCB", 0.05)
		}
	}
}));

export const DescriptionText = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "isTablet" && prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	fontFamily: "Titillium Web",
	fontWeight: "bold",
	fontSize: "13px",
	color: theme.palette.text.primary,
	// textShadow: "-1px 0 #000, 1px 0 #000, 0 -1px #000, 0 1px #000",
	textShadow: "0px 0px 1px rgba(0,0,0,.5)",
	letterSpacing: 3,
	[theme.breakpoints.between("sm", "md")]: {
		fontSize: "16px",
		letterSpacing: 5
	},
	[theme.breakpoints.between("md", "lg")]: {
		fontSize: "20px",
		letterSpacing: 6
	},
	[theme.breakpoints.between("lg", "xl")]: {
		fontSize: "20px",
		letterSpacing: 9
	},
	[theme.breakpoints.up("xl")]: {
		fontSize: "24px",
		letterSpacing: 6
	}
}));

export const ImageContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	height: isSmallView ? "50%" : "100%",
	width: isSmallView ? "100%" : "50%",
	display: "flex",
	justifyContent: "center",
	alignItems: isSmallView ? "flex-end" : "center", // Center items vertically
	position: "relative"
}));

export const JumbotronImage = styled("img")(({ theme, src }) => ({
	width: "100%",
	height: "auto",
	visibility: "hidden",
	"&.show": {
		visibility: "visible"
	}
}));

export const SocialMediaContainer = styled("div", {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	height: "auto",
	width: "250px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginTop: "1rem",
	maxWidth: "250px",
	[theme.breakpoints.up("sm")]: {
		width: "350px",
		maxWidth: "350px"
	},
	[theme.breakpoints.up("md")]: {
		width: "400px",
		maxWidth: "400px"
	},
	[theme.breakpoints.up("lg")]: {
		width: "500px",
		maxWidth: "465px"
	}
}));