import { createContext, useEffect, useContext, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "@/site-settings/theme";

const ThemeCtx = createContext({
	isDark: true,
	toggleTheme: () => {}
});

const SiteThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(true);
	const [isBlogPage, setIsBlogPage] = useState(false);

	const router = useRouter();
	const toggleTheme = () => setIsDark((prev) => !prev);

	useEffect(() => {
		// Check if current route is the blog page
		if (router.pathname === "/blog") {
			setIsBlogPage(true);
		} else {
			setIsBlogPage(false);
		}
	}, [router.pathname]);

	const contextValue = useMemo(() => ({ isDark, toggleTheme, isBlogPage }), [isDark, isBlogPage]);

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
