import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/site-settings/theme";

const ThemeCtx = createContext(null);

const SiteThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(true);

	const toggleTheme = () => {
		setIsDark((prev) => !prev);
	};
	const theme = isDark ? darkTheme : lightTheme;
	const _values = { isDark, toggleTheme };

	return (
		<ThemeCtx.Provider value={_values}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeCtx.Provider>
	);
};

export const useThemeCtx = () => useContext(ThemeCtx);

export default SiteThemeProvider;
