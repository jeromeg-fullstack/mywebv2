import { styled, darken, lighten } from "@mui/material";
import { compose, spacing } from "@mui/system";

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

export const MenuButton = styled("button")(({ theme, isDark }) => ({
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
		width: "75px"
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
	width: "70px"
}));

export const NavButton = styled("button")`
	all: unset;
	cursor: pointer;
	font-size: 22px;
	color: #444444;
	height: 40px;
	position: relative;
	${compose(spacing)}
`;
