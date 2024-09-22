import { lighten, darken, createTheme } from "@mui/material";

// Color constants
const SILVER = "#cccccc";
const JET = "#333333ff";
const TANGERINE = "#da9b00";
const TRICORN_BLACK = "#2d2d2d";
const CLASSIC_FRENCH_GRAY = "#8a8b85";
const FORESTWOOD = "#5a6054";
const SILVERPOINTE = "#d1d2cd";
const GOLDFINCH = "#fabf01";
const RESONANT_BLUE = "#2f9bca";
const RETRO_BLUE = "#198bca";
const CADET_GRAY = "#A3A7A9ff";

// Breakpoints
const breakpoints = {
	values: {
		xs: 320,
		sm: 600,
		md: 1024,
		lg: 1200,
		xl: 1366
	}
};

// Shared settings (e.g., fonts)
const sharedSettings = {
	typography: {
		fontFamily: "Titillium Web, sans-serif",
		h1: {
			fontFamily: "Titillium Web",
			fontSize: 36,
			fontWeight: 700
		},
		h2: {
			fontFamily: "lores-bold-narrow",
			fontSize: 24,
			fontWeight: 700
		},
		h3: {
			fontFamily: "Titillium Web",
			fontSize: 18,
			fontWeight: 700
		},
		body1: {
			fontFamily: "Titillium Web",
			fontSize: 16
		}
	},
	breakpoints: breakpoints
};

// Light theme
const lightTheme = createTheme({
	...sharedSettings,
	palette: {
		mode: "light",
		primary: {
			main: SILVER,
			light: lighten(SILVER, 0.5),
			dark: darken(SILVER, 0.5),
			contrastText: JET
		},
		secondary: {
			main: CLASSIC_FRENCH_GRAY,
			light: lighten(CLASSIC_FRENCH_GRAY, 0.5),
			dark: darken(CLASSIC_FRENCH_GRAY, 0.5),
			contrastText: JET
		},
		background: {
			default: SILVER,
			paper: JET
		},
		text: {
			primary: JET,
			secondary: TANGERINE,
			icon: FORESTWOOD
			// disabled: CADET_GRAY
		},
		common: {
			black: TRICORN_BLACK,
			gray: CLASSIC_FRENCH_GRAY,
			gold: TANGERINE,
			blue: RESONANT_BLUE,
			silver: SILVERPOINTE
		},
		error: {
			main: "#FF0000",
			light: "#FFC080",
			dark: "#B30000",
			contrastText: "#FFFFFF"
		},
		warning: {
			main: "#FFC107",
			light: "#FFD700",
			dark: "#B37000",
			contrastText: "#FFFFFF"
		},
		info: {
			main: "#2196F3",
			light: "#87CEEB",
			dark: "#0D47A1",
			contrastText: "#FFFFFF"
		},
		success: {
			main: "#4CAF50",
			light: "#8BC34A",
			dark: "#2E865F",
			contrastText: "#FFFFFF"
		},
		action: {
			main: "#03A9F4",
			light: "#64B5F6",
			dark: "#0277BD",
			contrastText: "#FFFFFF",
			disabled: "",
			disabledBackground: ""
		},
		grey: {
			50: "#F7F7F7",
			100: "#E5E5E5",
			200: "#CCCCCC",
			300: "#B3B3B3",
			400: "#999999",
			500: "#808080",
			600: "#666666",
			700: "#555555",
			800: "#444444",
			900: "#333333"
		}
	}
});

// Dark theme
const darkTheme = createTheme({
	...sharedSettings,
	palette: {
		mode: "dark",
		primary: {
			main: TRICORN_BLACK,
			light: lighten(TRICORN_BLACK, 0.5),
			dark: darken(TRICORN_BLACK, 0.5),
			contrastText: SILVER
		},
		secondary: {
			main: CLASSIC_FRENCH_GRAY,
			light: lighten(CLASSIC_FRENCH_GRAY, 0.5),
			dark: darken(CLASSIC_FRENCH_GRAY, 0.5),
			contrastText: SILVER
		},
		background: {
			default: TRICORN_BLACK,
			paper: SILVER
		},
		text: {
			primary: SILVER,
			secondary: lighten(RETRO_BLUE, 0.1),
			icon: FORESTWOOD,
			disabled: CADET_GRAY
		},
		common: {
			black: TRICORN_BLACK,
			gray: CLASSIC_FRENCH_GRAY,
			green: FORESTWOOD,
			silver: SILVERPOINTE,
			gold: GOLDFINCH,
			blue: RESONANT_BLUE
		},
		error: {
			main: "#FF0000",
			light: "#FFC080",
			dark: "#B30000",
			contrastText: "#FFFFFF"
		},
		warning: {
			main: "#FFC107",
			light: "#FFD700",
			dark: "#B37000",
			contrastText: "#FFFFFF"
		},
		info: {
			main: "#2196F3",
			light: "#87CEEB",
			dark: "#0D47A1",
			contrastText: "#FFFFFF"
		},
		success: {
			main: "#4CAF50",
			light: "#8BC34A",
			dark: "#2E865F",
			contrastText: "#FFFFFF"
		},
		action: {
			main: "#03A9F4",
			light: "#64B5F6",
			dark: "#0277BD",
			contrastText: "#FFFFFF",
			disabled: "",
			disabledBackground: ""
		},
		grey: {
			50: "#F7F7F7",
			100: "#E5E5E5",
			200: "#CCCCCC",
			300: "#B3B3B3",
			400: "#999999",
			500: "#808080",
			600: "#666666",
			700: "#555555",
			800: "#444444",
			900: "#333333"
		}
	},
	components: {}
});

export { lightTheme, darkTheme };
