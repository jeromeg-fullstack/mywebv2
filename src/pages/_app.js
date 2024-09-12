import React from "react";
import "@/styles/globals.css"; // Import your global styles (normalize + custom styles)
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/utils"; // Make sure to have this utility
import SiteThemeProvider from "@/context/theme";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
	return (
		<CacheProvider value={emotionCache}>
			<SiteThemeProvider>
				<CssBaseline />
				<Component {...pageProps} />
			</SiteThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
