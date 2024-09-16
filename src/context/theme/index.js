import { createContext, useContext, useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "@/site-settings/theme";

const ThemeCtx = createContext({
	isDark: true,
	toggleTheme: () => {}
});

const SiteThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(true);

	const toggleTheme = () => setIsDark((prev) => !prev);

	const contextValue = useMemo(() => ({ isDark, toggleTheme }), [isDark]);

	return (
		<ThemeCtx.Provider value={contextValue}>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>
		</ThemeCtx.Provider>
	);
};

export const useThemeCtx = () => {
	const context = useContext(ThemeCtx);
	if (!context) {
		throw new Error("useThemeCtx must be used within a SiteThemeProvider");
	}
	return context;
};

export default SiteThemeProvider;
