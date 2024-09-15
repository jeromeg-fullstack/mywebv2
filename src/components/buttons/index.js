import { styled, darken, lighten } from "@mui/material";

export const BrandButton = styled("button")(({ theme }) => ({
	all: "unset",
	cursor: "pointer",
	backgroundColor: theme.palette.background.paper,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "inherit",
	width: "auto",
	padding: "0 15px",
	"& img": {
		height: "auto",
		width: "65px"
	}
}));

export const MenuButton = styled("button", {
	shouldForwardProp: (prop) => prop !== "isDark"
})(({ theme, isDark }) => ({
	all: "unset",
	backgroundColor: isDark
		? darken(theme.palette.background.default, 0.2)
		: lighten(theme.palette.background.default, 0.6),
	transition: "background-color 0.5s cubic-bezier(0.5, 0, 0.2, 1)",
	height: "inherit",
	width: "65px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
	"@media (min-width: 765px)": {
		width: "80px"
	}
}));

export const ThemeButton = styled("button")(({ theme }) => ({
	all: "unset",
	display: "flex",
	backgroundColor: "transparent",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
	height: "inherit",
	width: "100%"
}));

export const NavButton = styled("button", {
	shouldForwardProp: (prop) => prop !== "isDark"
})(({ theme, isDark }) => ({
	all: "unset",
	cursor: "pointer",
	fontSize: "22px",
	height: "40px",
	position: "relative",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: "color 0.5s cubic-bezier(0.5, 0, 0.2, 1)",

	"&:hover .icon": {
		opacity: 0,
		transform: "translateY(-10px)" // Smoothly move the icon up
	},

	"&:hover .nav-text": {
		opacity: 1,
		transform: "translateY(0)" // Move the text into position
	},

	"&:hover .highlight": { color: theme.palette.text.primary }
}));

export const NavText = styled("span", {
	shouldForwardProp: (prop) => prop !== "isDark"
})(({ theme, isDark }) => ({
	opacity: 0,
	position: "absolute",
	fontSize: "14px",
	fontWeight: "bold",
	color: theme.palette.text.primary,
	pointerEvents: "none",
	transition: "opacity 0.3s ease, transform 0.3s ease",
	transform: "translateY(10px)" // Hide text below initially
}));
