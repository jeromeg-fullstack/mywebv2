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
  const pathname = router.asPath;
	const toggleTheme = () => setIsDark((prev) => !prev);

	const blogPathPattern = /^\/blog(\/.*)?$/;

	useEffect(() => {
		if (typeof window !== "undefined") {
			console.log("Current asPath:", pathname); // Check the actual path

			if (pathname === "/blog" || blogPathPattern.test(pathname)) {
        console.log(pathname)
				setIsBlogPage(true);
			} else {
				console.log("I chose false");
				setIsBlogPage(false);
			}
		}
	}, [pathname]);

	console.log(isBlogPage);

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
