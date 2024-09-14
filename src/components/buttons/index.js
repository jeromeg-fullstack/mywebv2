import { styled, darken, lighten } from "@mui/material";
import { compose, spacing } from "@mui/system";

export const BrandButton = styled("button")(({ theme }) => ({
	all: "unset",
	cursor: "pointer",
	backgroundColor: theme.palette.background.paper,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "21px 14px",
	"& img": {
		height: "auto",
		width: "65px"
	}
}));

export const MenuButton = styled("button")(({ theme, isDark }) => ({
	all: "unset",
	backgroundColor: isDark
		? darken(theme.palette.background.default, 0.2)
		: lighten(theme.palette.background.default, 0.75),
	transition: "background-color 0.5s cubic-bezier(0.5, 0, 0.2, 1)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "12px",
	cursor: "pointer"
}));

export const ThemeButton = styled("button")(({ theme }) => ({
	all: "unset",
	display: "flex",
	backgroundColor: "transparent",
	justifyContent: "center",
	alignItems: "center",
	padding: "11px",
	cursor: "pointer"
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
