import { createTheme, darken, lighten } from "@mui/material/styles";

// Color constants
const SILVER = "#C0C0C0ff";
const CADET_GRAY = "#A3A7A9ff";
const TAUPE = "#494442ff";
const SATIN_SHEEN_GOLD = "#B69839ff";
const JET = "#333333ff";
const BICE_BLUE = "#1A6996ff";
const TANGERINE = "#da9b00";
const HOKEY_POKEY = "#c5a334";
const TRICORN_BLACK = "#2d2d2d";
const CLASSIC_FRENCH_GRAY = "#8a8b85";
const FORESTWOOD = "#5a6054";
const SILVERPOINTE = "#d1d2cd";
const GOLDFINCH = "#fabf01";
const RESONANT_BLUE = "#2f9bca";
const MEGAMAN_HELMET = "#0057FF";
const RETRO_BLUE = "#198bca";

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
			fontFamily: "Titillium Web"
		},
		h2: {
			fontFamily: "lores-bold-narrow"
		},
		h3: {
			fontFamily: "Titillium Web"
		},
		body1: {
			fontFamily: "Titillium Web"
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
			main: TRICORN_BLACK
		},
		secondary: {
			main: CLASSIC_FRENCH_GRAY,
			light: SILVER
		},
		background: {
			default: "#fff",
			paper: JET // Light theme p description background
		},
		text: {
			primary: JET, // Light theme p description
			secondary: darken(TANGERINE, 0.15),
			icon: FORESTWOOD
		},
		common: {
			black: TRICORN_BLACK,
			gray: CLASSIC_FRENCH_GRAY,
			gold: GOLDFINCH,
			blue: RESONANT_BLUE,
			silver: SILVER
		}
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: CADET_GRAY // bg brand logo
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					"& .MuiSvgIcon-root": {
						color: HOKEY_POKEY // Active light theme nav icons
					}
				}
			}
		},
		MuiTypography: {
			styleOverrides: {
				h2: {
					color: "#000", // Light theme h2
					textShadow:
						"-2px -2px 0 JET, 2px -2px 0 JET, -2px 2px 0 JET, 2px 2px 0 JET, 2px 2px 5px rgba(0,0,0,0.95)"
				}
			}
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					backgroundColor: JET // Light theme navbar bg
				}
			}
		}
	}
});

// Dark theme
const darkTheme = createTheme({
	...sharedSettings,
	palette: {
		mode: "dark",
		primary: {
			main: TRICORN_BLACK
		},
		secondary: {
			main: CLASSIC_FRENCH_GRAY,
			light: SILVER
		},
		background: {
			default: TAUPE, // Dark theme navbar bg
			paper: SILVER // Dark theme p description background
		},
		text: {
			primary: SILVER, // Dark theme p description
			secondary: lighten(RETRO_BLUE, 0.1),
			icon: FORESTWOOD
		},
		common: {
			black: TRICORN_BLACK,
			gray: CLASSIC_FRENCH_GRAY,
			green: FORESTWOOD,
			silver: SILVERPOINTE,
			gold: GOLDFINCH,
			blue: RESONANT_BLUE,
			silver: SILVER
		}
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: CADET_GRAY // bg brand logo
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					"& .MuiSvgIcon-root": {
						color: CADET_GRAY // Dark theme and light theme icon unhovered
					}
				}
			}
		},
		MuiTypography: {
			styleOverrides: {
				h1: {
					color: BICE_BLUE // Active dark theme h1 font
				},
				h2: {
					color: JET, // Dark theme h2
					textShadow:
						"-2px -2px 0 SILVER, 2px -2px 0 SILVER, -2px 2px 0 SILVER, 2px 2px 0 SILVER, 2px 2px 5px rgba(0,0,0,0.95)"
				},
				body1: {
					color: SILVER // Dark theme p description
				}
			}
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					backgroundColor: TAUPE // Dark theme navbar bg
				}
			}
		}
	}
});

export { lightTheme, darkTheme };
