import { createTheme, lighten } from "@mui/material/styles";

const icomoon = "icomoon, sans-serif, system-ui";
const fontLoresBoldNarrow = "lores-bold-narrow, sans-serif, system-ui";
const fontLoresNarrow = "lores-narrow, sans-serif, system-ui";
const fontLoresWide = "lores-wide, sans-serif, system-ui";
const fontTitilliumWeb = "Tittilium Web, sans-serif, system-ui";

const typography = {
	fontFamily: {
		icomoon: icomoon,
		loresBoldNarrow: fontLoresBoldNarrow,
		loresNarrow: fontLoresNarrow,
		loresWide: fontLoresWide,
		titilliumWeb: fontTitilliumWeb
	},
	fontSize: 0.95
};
const spacing = (factor) => `${0.25 * factor}rem`;
const shadows = {};
const shape = {};
const components = {};

const breakpoints = {
	values: {
		xs: 320, // $breakpoints
		sm: 600,
		md: 1024,
		lg: 1200,
		xl: 1366
	}
};

const commonSettings = [
	typography,
	spacing,
	// shadows,
	// shape,
	// components,
	breakpoints
];

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: { main: "#1976d2" },
		secondary: { main: "#ff4081" },
		background: { default: "#2d2d2d", paper: "#8a8b85" },
		text: {
			primary: "#d1d2cd ",
			secondary: "#c5a334",
			disabled: "rgba(255, 255, 255, 0.5)",
			icon: "#8a8b85"
		}
	},
	...commonSettings
});

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: { main: "#1976d2" },
		secondary: { main: "#ff4081" },
		background: { default: "#2d2d2d", paper: "#8a8b85" },
		text: {
			primary: "#2d2d2d",
			secondary: "#c5a334 ",
			disabled: "rgba(255, 255, 255, 0.5)",
			icon: lighten("#333", 0.15)
		}
	},
	...commonSettings
});
