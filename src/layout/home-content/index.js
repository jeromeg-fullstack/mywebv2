import { Box, Typography } from "@mui/material";
import { darken, styled } from "@mui/system";

// Styled Components
export const ContentContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	height: "100%",
	width: "100%",
	flex: 1,
	marginLeft: !isSmallView ? "4rem" : 0
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
	// textShadow: "-1px 0 #000, 1px 0 #000, 0 -1px #000, 0 1px #000",
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

export const NameText = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "isDark"
})(({ theme, isDark }) => ({
	fontFamily: "lores-bold-narrow",
	fontSize: "50px",
	letterSpacing: -5,
	[theme.breakpoints.between("sm", "md")]: {
		fontSize: "75px",
		letterSpacing: -10
	},
	[theme.breakpoints.between("md", "lg")]: {
		fontSize: "90px",
		letterSpacing: -10
	},
	[theme.breakpoints.between("lg", "xl")]: {
		fontSize: "100px",
		letterSpacing: -10
	},
	[theme.breakpoints.up("xl")]: {
		fontSize: "100px",
		letterSpacing: -15
	},
	color: isDark ? "#2d2d2d" : darken("#CBCBCB", 0.1),
	textShadow: isDark
		? "-2px -2px 0 #CBCBCB, 2px -2px 0 #CBCBCB, -2px 2px 0 #CBCBCB, 2px 2px 0 #CBCBCB,  2px 2px 5px rgba(0,0,0,0.95)"
		: "-2px -2px 0 #2d2d2d, 2px -2px 0 #2d2d2d, -2px 2px 0 #2d2d2d, 2px 2px 0 #2d2d2d,  2px 2px 5px rgba(0,0,0,0.95)",

	padding: 0,
	margin: 0
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
	letterSpacing: 2,
	marginTop: "1rem",
	[theme.breakpoints.between("sm", "md")]: {
		fontSize: "16px",
		letterSpacing: 4
	},
	[theme.breakpoints.between("md", "lg")]: {
		fontSize: "20px",
		letterSpacing: 5
	},
	[theme.breakpoints.between("lg", "xl")]: {
		fontSize: "20px",
		letterSpacing: 7
	},
	[theme.breakpoints.up("xl")]: {
		fontSize: "22px",
		letterSpacing: 7
	}
}));

export const ImageContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isSmallView"
})(({ theme, isSmallView }) => ({
	flex: 1,
	display: "flex",
	justifyContent: "center",
	alignItems: !isSmallView ? "center" : "flex-end"
}));

export const JumbotronImage = styled("img")(({ theme }) => ({
	width: "175px",
	height: "auto",
	[theme.breakpoints.up("sm")]: {
		width: "200px"
	},
	[theme.breakpoints.up("md")]: {
		width: "300px"
	},
	[theme.breakpoints.up("lg")]: {
		width: "400px"
	},
	[theme.breakpoints.up("xl")]: {
		width: "550px"
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
	maxWidth: "225px",
	[theme.breakpoints.up("sm")]: {
		width: "300px",
		maxWidth: "300px"
	},
	[theme.breakpoints.up("md")]: {
		width: "400px",
		maxWidth: "390px"
	},
	[theme.breakpoints.up("lg")]: {
		width: "500px",
		maxWidth: "425px"
	}
}));
