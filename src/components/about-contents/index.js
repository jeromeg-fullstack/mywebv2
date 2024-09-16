import { styled, Typography, lighten } from "@mui/material";

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

export const TextContentHeading = styled(Typography)(({ theme }) => ({
	fontFamily: "lores-bold-narrow",
	color: lighten(theme.palette.text.primary, 0.07),
	fontSize: "18px",
	"@media screen and (min-width: 600px)": {
		fontSize: " 22px"
	},
	"@media screen and (min-width: 765px)": {
		fontSize: "27px"
	},
	"@media screen and (min-width: 900px)": {
		fontSize: "45px"
	}
}));

export const TextContentDescription = styled(Typography)(({ theme }) => ({
	fontFamily: "Titillium Web",
	color: lighten(theme.palette.text.primary, 0.07),
	fontSize: "14px",
	fontWeight: 500,
	"@media screen and (min-width: 600px)": {
		fontSize: " 18px"
	},
	"@media screen and (min-width: 765px)": {
		fontSize: "20px"
	},
	"@media screen and (min-width: 900px)": {
		fontSize: "20px"
	}
}));
