import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled Components
export const ContentContainer = styled(Box)(({ theme }) => ({
	height: "100%",
	width: "100%",
	flex: 1
}));

export const InnerContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	height: "100%",
	width: "100%"
}));

export const GreetingText = styled(Typography)(({ theme }) => ({
	fontFamily: "Titillium Web",
	fontSize: "20px",
	fontWeight: "bolder",
	color: theme.palette.text.primary,
	letterSpacing: "0.6px",
	textShadow: "-1px 0 #000, 1px 0 #000, 0 -1px #000, 0 1px #000",
	padding: 0,
	margin: 0,
	[theme.breakpoints.between("sm", "md")]: {
		fontSize: "26px"
	},
	[theme.breakpoints.between("md", "lg")]: {
		fontSize: "35px"
	},
	[theme.breakpoints.between("lg", "xl")]: {
		fontSize: "50px"
	},
	[theme.breakpoints.up("xl")]: {
		fontSize: "50px"
	}
}));

export const NameText = styled(Typography)(({ theme }) => ({
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
		letterSpacing: -15
	},
	[theme.breakpoints.up("xl")]: {
		fontSize: "100px",
		letterSpacing: -15
	},
	color: "#c5a334",
	textShadow: "-1px 0 #000, 1px 0 #000, 0 -1px #000, 0 1px #000",
	padding: 0,
	margin: 0
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
	fontFamily: "Titillium Web",
	fontWeight: "bold",
	fontSize: "13px",
	color: theme.palette.text.primary,
	textShadow: "-1px 0 #000, 1px 0 #000, 0 -1px #000, 0 1px #000",
	letterSpacing: 2,
	[theme.breakpoints.between("sm", "md")]: {
		fontSize: "16px",
		letterSpacing: 4
	},
	[theme.breakpoints.between("md", "lg")]: {
		fontSize: "20px",
		letterSpacing: 5
	},
	[theme.breakpoints.between("lg", "xl")]: {
		fontSize: "26px",
		letterSpacing: 6
	},
	[theme.breakpoints.up("xl")]: {
		fontSize: "26px",
		letterSpacing: 6
	}
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
	flex: 1,
	display: "flex",
	justifyContent: "center",
	alignItems: "flex-end"
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

export const SocialMediaContainer = styled("div")(({ theme }) => ({
	height: "auto",
	width: "250px",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	marginTop: "2rem",
	[theme.breakpoints.up("sm")]: {
		width: "300px"
	},
	[theme.breakpoints.up("md")]: {
		width: "400px"
	},
	[theme.breakpoints.up("lg")]: {
		width: "500px"
	},
	[theme.breakpoints.up("xl")]: {
		width: "550px"
	}
}));
