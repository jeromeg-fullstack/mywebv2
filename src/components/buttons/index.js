import { styled, darken } from "@mui/material";

export const BrandButton = styled("button")(({ theme }) => ({
	all: "unset",
	cursor: "pointer",
	backgroundColor: theme.palette.secondary.main,
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

export const MenuButton = styled("button")(({ theme }) => ({
	all: "unset",
	backgroundColor: darken(theme.palette.primary.main, 0.1),
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
})(({ theme }) => ({
	all: "unset",
	cursor: "pointer",
	fontSize: "22px",
	height: "40px",
	position: "relative",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: "color 0.5s cubic-bezier(0.5, 0, 0.2, 1)",

	// Hover effect for non-active buttons
	"&:hover .icon": {
		opacity: 0,
		transform: "translateY(-10px)"
	},
	"&:hover .nav-text": {
		opacity: 1,
		transform: "translateY(0)"
	},

	// Styles when the button is active
	"&.active .icon": {
		opacity: 1,
		transform: "none"
	},
	"&.active .nav-text": {
		display: "none" // Or hidden
	}
}));

export const NavText = styled("span", {
	shouldForwardProp: (prop) => prop !== "isDark"
})(({ theme, isDark }) => ({
	opacity: 0,
	position: "absolute",
	fontSize: "14px",
	fontWeight: "bold",
	color: theme.palette.secondary.light,
	pointerEvents: "none",
	transition: "opacity 0.3s ease, transform 0.3s ease",
	transform: "translateY(10px)" // Hide text below initially
}));

export const SocialMediaButton = styled("button")(({ theme }) => ({
	all: "unset",
	cursor: "pointer",
	height: "40px",
	position: "relative",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: "color 0.5s cubic-bezier(0.5, 0, 0.2, 1)",
	backgroundColor: "transparent"
}));

export const DefaultButton = styled("button")(({ theme }) => ({
	all: "unset",
	cursor: "pointer",
	height: "40px",
	position: "relative",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: "color 0.5s cubic-bezier(0.5, 0, 0.2, 1)",
	backgroundColor: "transparent"
}));
