import { Box, Typography } from "@mui/material";
import { darken, styled } from "@mui/material";

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

export const GreetingText = styled(Typography)(({ theme }) => ({
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

export const NameText = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "isDark"
})(({ theme, isDark }) => ({
	visibility: "hidden",
	fontFamily: "lores-bold-narrow",
	fontSize: "50px",
	letterSpacing: -2,
	color: isDark ? "#333" : darken("#CBCBCB", 0.05),
	textShadow: isDark
		? "-2px -2px 0 #CBCBCB, 2px -2px 0 #CBCBCB, -2px 2px 0 #CBCBCB, 2px 2px 0 #CBCBCB,  2px 2px 5px rgba(0,0,0,0.95)"
		: "-2px -2px 0 #2d2d2d, 2px -2px 0 #2d2d2d, -2px 2px 0 #2d2d2d, 2px 2px 0 #2d2d2d,  2px 2px 5px rgba(0,0,0,0.95)",
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
		color: isDark ? "#333" : darken("#CBCBCB", 0.05),
		textShadow: isDark
			? "-2px -2px 0 #CBCBCB, 2px -2px 0 #CBCBCB, -2px 2px 0 #CBCBCB, 2px 2px 0 #CBCBCB,  2px 2px 5px rgba(0,0,0,0.95)"
			: "-2px -2px 0 #2d2d2d, 2px -2px 0 #2d2d2d, -2px 2px 0 #2d2d2d, 2px 2px 0 #2d2d2d,  2px 2px 5px rgba(0,0,0,0.95)"
	},
	"& .blast": {
		opacity: 0,
		display: "inline-block",
		transition: "all .3s ease-out",
		"&:hover": {
			color: isDark ? "#333" : darken("#CBCBCB", 0.05)
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
	flex: 1,
	display: "flex",
	justifyContent: "center",
	alignItems: !isSmallView ? "center" : "flex-end",
	overflow: "hidden",
	padding: "50px", // Add padding to increase space around the content
	width: "100%",
	height: "auto" // Adjust height as needed
}));

export const JumbotronImage = styled("img")(({ theme, src }) => ({
	width: "200px",
	height: "auto",
	visibility: "hidden",
	"&.show": {
		visibility: "visible"
	},
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
