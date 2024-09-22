import { createContext, useEffect, useContext, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "@/site-settings/theme/___index";

const ThemeCtx = createContext({
	isDark: true,
	toggleTheme: () => {}
});

const SiteThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(true);
	const [isBlogPage, setIsBlogPage] = useState(false);

	const toggleTheme = () => setIsDark((prev) => !prev);
	const blogPathPattern = /^\/blog(\/.*)?$/;

	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) {
			console.log("router is not ready!");
			return;
		}

		console.log("router is ready!");

		const handleRouteChange = (url) => {
			console.log("Route changed to:", url);
			if (url === "/blog" || blogPathPattern.test(url)) {
				setIsBlogPage(true);
			} else {
				setIsBlogPage(false);
			}
		};

		handleRouteChange(router.pathname);

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, []);

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
