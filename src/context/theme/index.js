import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/site-settings/theme";

const ThemeCtx = createContext(null);

const SiteThemeProvider = ({ children }) => {
	const [isLight, setIsLight] = useState(false);

	const toggleTheme = () => {
		setIsLight((prev) => !prev);
	};
	const theme = isLight ? lightTheme : darkTheme;

	return (
		<ThemeCtx.Provider value={toggleTheme}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeCtx.Provider>
	);
};

export const useThemeCtx = () => useContext(ThemeCtx);

export default SiteThemeProvider;
